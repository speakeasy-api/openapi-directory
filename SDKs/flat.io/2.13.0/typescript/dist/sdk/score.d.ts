import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Sheet music is the main API object type available for all Flat account.
 *
 * @remarks
 * Here is a typical lifecycle for a music score document on Flat:
 *   - An end user can **create a music score** or **import a document** using our [web interface](https://flat.io) or a third-party website/app (e.g. Google Drive) using this API (see [`POST /v2/scores`](#operation/createScore). The creation and import of music scores can be done with this single API endpoint. This one currently supports the [MusicXML](http://www.musicxml.com/) (compressed or not) and [MIDI](https://www.midi.org/specifications).
 *   - **List scores**:
 *     - The **owned scores** can be listed using the [collections API methods](#tag/Collection), especially [`GET /collections/{collection}/scores`](#operation/listCollectionScores).
 *     - The scores from a public account can be listed with [`GET /users/{user}/scores`](#operation/getUserScores).
 *     - Scores shared with a specific group can be listed with [`GET /groups/{group}/scores`](#operation/getGroupScores).
 *   - The metadata of a single score can be retrieved with [`GET /scores/{score}`](#operation/getScore).
 *   - Scores on Flat have **one or multiple revisions**: creating a new score will create a first revision. These **revisions can be listed** using [`GET /scores/{score}/revisions`](#operation/getScoreRevisions) and a specific **revision data can be downloaded** with [`GET /scores/{score}/revisions/{revision}/{format}`](#operation/getScoreRevisionData). New revisions can be created using our [sheet music editor](https://flat.io) or using [`POST /scores/{score}/revisions`](#operation/createScoreRevision) (this endpoint has similar parameters than during the score creation). The last revision of a document may not directly reflect the really last version of a music score: recent modifications can be made offline or not yet consolidated into a new revision. In average, a new revision is created every 100 modifications made with our editor.
 *   - Scores can be **shared publicly** by changing the privacy option with [`POST /scores/{score}`](#operation/editScore), or **individually shared** using the different collaborators API endpoints (see [`POST /scores/{score}/collaborators`](#operation/addScoreCollaborator)).
 *
 */
export declare class Score {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a new collaborator
     *
     * @remarks
     * Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.
     * - To add an existing Flat user to the resource, specify its unique identifier in the `user` property.
     * - To invite an external user to the resource, specify its email in the `userEmail` property.
     * - To add a Flat group to the resource, specify its unique identifier in the `group` property.
     * - To update an existing collaborator, process the same request with different rights.
     *
     */
    addScoreCollaborator(req: operations.AddScoreCollaboratorRequest, security: operations.AddScoreCollaboratorSecurity, config?: AxiosRequestConfig): Promise<operations.AddScoreCollaboratorResponse>;
    /**
     * Add a new video or audio track to the score
     *
     * @remarks
     * Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
     * This API method support medias hosted on SoundCloud, YouTube and Vimeo.
     *
     */
    addScoreTrack(req: operations.AddScoreTrackRequest, security: operations.AddScoreTrackSecurity, config?: AxiosRequestConfig): Promise<operations.AddScoreTrackResponse>;
    /**
     * Create a new score
     *
     * @remarks
     * Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI (`audio/midi`), Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar, or MuseScore file to create the new Flat document.
     *
     * This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).
     *
     * The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).
     *
     * If no `collection` is specified, the API will create the score in the most appropriate collection. This can be the `root` collection or a different collection based on the user's settings or API authentication method.
     * If a `collection` is specified and this one has more public privacy settings than the score (e.g. `public` vs `private` for the score), the privacy settings of the created score will be adjusted to the collection ones.
     * You can check the adjusted privacy settings in the returned score `privacy`, and optionally adjust these settings if needed using `PUT /scores/{score}`.
     *
     */
    createScore(req: shared.ScoreCreation, security: operations.CreateScoreSecurity, config?: AxiosRequestConfig): Promise<operations.CreateScoreResponse>;
    /**
     * Create a new revision
     *
     * @remarks
     * Update a score by uploading a new revision for this one.
     *
     */
    createScoreRevision(req: operations.CreateScoreRevisionRequest, security: operations.CreateScoreRevisionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateScoreRevisionResponse>;
    /**
     * Delete a score
     *
     * @remarks
     * This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.
     *
     * When called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.
     * The score won't be accessible anymore after calling this method and the user's quota will directly be updated.
     *
     * When called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).
     *
     */
    deleteScore(req: operations.DeleteScoreRequest, security: operations.DeleteScoreSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteScoreResponse>;
    /**
     * Delete a comment
     */
    deleteScoreComment(req: operations.DeleteScoreCommentRequest, security: operations.DeleteScoreCommentSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteScoreCommentResponse>;
    /**
     * Remove an audio or video track linked to the score
     */
    deleteScoreTrack(req: operations.DeleteScoreTrackRequest, security: operations.DeleteScoreTrackSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteScoreTrackResponse>;
    /**
     * Edit a score's metadata
     *
     * @remarks
     * This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.
     *
     * To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).
     *
     * When editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.
     * This pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.
     *
     */
    editScore(req: operations.EditScoreRequest, security: operations.EditScoreSecurity, config?: AxiosRequestConfig): Promise<operations.EditScoreResponse>;
    /**
     * Fork a score
     *
     * @remarks
     * This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.
     *
     * When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.
     *
     */
    forkScore(req: operations.ForkScoreRequest, security: operations.ForkScoreSecurity, config?: AxiosRequestConfig): Promise<operations.ForkScoreResponse>;
    /**
     * List liked scores
     */
    gerUserLikes(req: operations.GerUserLikesRequest, security: operations.GerUserLikesSecurity, config?: AxiosRequestConfig): Promise<operations.GerUserLikesResponse>;
    /**
     * List group's scores
     *
     * @remarks
     * Get the list of scores shared with a group.
     *
     */
    getGroupScores(req: operations.GetGroupScoresRequest, security: operations.GetGroupScoresSecurity, config?: AxiosRequestConfig): Promise<operations.GetGroupScoresResponse>;
    /**
     * Get a score's metadata
     *
     * @remarks
     * Get the details of a score identified by the `score` parameter in the URL.
     * The currently authenticated user must have at least a read access to the document to use this API call.
     *
     */
    getScore(req: operations.GetScoreRequest, security: operations.GetScoreSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreResponse>;
    /**
     * Get a collaborator
     *
     * @remarks
     * Get the information about a collaborator (User or Group).
     *
     */
    getScoreCollaborator(req: operations.GetScoreCollaboratorRequest, security: operations.GetScoreCollaboratorSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreCollaboratorResponse>;
    /**
     * List the collaborators
     *
     * @remarks
     * This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.
     *
     * Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).
     *
     */
    getScoreCollaborators(req: operations.GetScoreCollaboratorsRequest, security: operations.GetScoreCollaboratorsSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreCollaboratorsResponse>;
    /**
     * List comments
     *
     * @remarks
     * This method lists the different comments added on a music score (documents and inline) sorted by their post dates.
     */
    getScoreComments(req: operations.GetScoreCommentsRequest, security: operations.GetScoreCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreCommentsResponse>;
    /**
     * Get a score revision
     *
     * @remarks
     * When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
     * revision metadata.
     *
     */
    getScoreRevision(req: operations.GetScoreRevisionRequest, security: operations.GetScoreRevisionSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreRevisionResponse>;
    /**
     * Get a score revision data
     *
     * @remarks
     * Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML
     * `mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.
     *
     */
    getScoreRevisionData(req: operations.GetScoreRevisionDataRequest, security: operations.GetScoreRevisionDataSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreRevisionDataResponse>;
    /**
     * List the revisions
     *
     * @remarks
     * When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.
     *
     * Depending the plan of the account, this list can be trunked to the few last revisions.
     *
     */
    getScoreRevisions(req: operations.GetScoreRevisionsRequest, security: operations.GetScoreRevisionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreRevisionsResponse>;
    /**
     * List submissions related to the score
     *
     * @remarks
     * This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.
     *
     */
    getScoreSubmissions(req: operations.GetScoreSubmissionsRequest, security: operations.GetScoreSubmissionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreSubmissionsResponse>;
    /**
     * Retrieve the details of an audio or video track linked to a score
     */
    getScoreTrack(req: operations.GetScoreTrackRequest, security: operations.GetScoreTrackSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreTrackResponse>;
    /**
     * List user's scores
     *
     * @remarks
     * Get the list of public scores owned by a User.
     *
     * **DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
     * This method will no longer list private and shared scores, but only public scores of a Flat account.
     * If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.
     *
     */
    getUserScores(req: operations.GetUserScoresRequest, security: operations.GetUserScoresSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserScoresResponse>;
    /**
     * List the audio or video tracks linked to a score
     */
    listScoreTracks(req: operations.ListScoreTracksRequest, security: operations.ListScoreTracksSecurity, config?: AxiosRequestConfig): Promise<operations.ListScoreTracksResponse>;
    /**
     * Mark the comment as resolved
     */
    markScoreCommentResolved(req: operations.MarkScoreCommentResolvedRequest, security: operations.MarkScoreCommentResolvedSecurity, config?: AxiosRequestConfig): Promise<operations.MarkScoreCommentResolvedResponse>;
    /**
     * Mark the comment as unresolved
     */
    markScoreCommentUnresolved(req: operations.MarkScoreCommentUnresolvedRequest, security: operations.MarkScoreCommentUnresolvedSecurity, config?: AxiosRequestConfig): Promise<operations.MarkScoreCommentUnresolvedResponse>;
    /**
     * Post a new comment
     *
     * @remarks
     * Post a document or a contextualized comment on a document.
     *
     * Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.
     *
     */
    postScoreComment(req: operations.PostScoreCommentRequest, security: operations.PostScoreCommentSecurity, config?: AxiosRequestConfig): Promise<operations.PostScoreCommentResponse>;
    /**
     * Delete a collaborator
     *
     * @remarks
     * Remove the specified collaborator from the score
     *
     */
    removeScoreCollaborator(req: operations.RemoveScoreCollaboratorRequest, security: operations.RemoveScoreCollaboratorSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveScoreCollaboratorResponse>;
    /**
     * Untrash a score
     *
     * @remarks
     * This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.
     *
     */
    untrashScore(req: operations.UntrashScoreRequest, security: operations.UntrashScoreSecurity, config?: AxiosRequestConfig): Promise<operations.UntrashScoreResponse>;
    /**
     * Update an existing comment
     */
    updateScoreComment(req: operations.UpdateScoreCommentRequest, security: operations.UpdateScoreCommentSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateScoreCommentResponse>;
    /**
     * Update an audio or video track linked to a score
     */
    updateScoreTrack(req: operations.UpdateScoreTrackRequest, security: operations.UpdateScoreTrackSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateScoreTrackResponse>;
}
