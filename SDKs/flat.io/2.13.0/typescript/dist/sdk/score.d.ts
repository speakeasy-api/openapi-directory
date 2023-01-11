import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Score {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addScoreCollaborator - Add a new collaborator
     *
     * Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.
     * - To add an existing Flat user to the resource, specify its unique identifier in the `user` property.
     * - To invite an external user to the resource, specify its email in the `userEmail` property.
     * - To add a Flat group to the resource, specify its unique identifier in the `group` property.
     * - To update an existing collaborator, process the same request with different rights.
     *
    **/
    addScoreCollaborator(req: operations.AddScoreCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.AddScoreCollaboratorResponse>;
    /**
     * addScoreTrack - Add a new video or audio track to the score
     *
     * Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
     * This API method support medias hosted on SoundCloud, YouTube and Vimeo.
     *
    **/
    addScoreTrack(req: operations.AddScoreTrackRequest, config?: AxiosRequestConfig): Promise<operations.AddScoreTrackResponse>;
    /**
     * createScore - Create a new score
     *
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
    **/
    createScore(req: operations.CreateScoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateScoreResponse>;
    /**
     * createScoreRevision - Create a new revision
     *
     * Update a score by uploading a new revision for this one.
     *
    **/
    createScoreRevision(req: operations.CreateScoreRevisionRequest, config?: AxiosRequestConfig): Promise<operations.CreateScoreRevisionResponse>;
    /**
     * deleteScore - Delete a score
     *
     * This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.
     *
     * When called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.
     * The score won't be accessible anymore after calling this method and the user's quota will directly be updated.
     *
     * When called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).
     *
    **/
    deleteScore(req: operations.DeleteScoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScoreResponse>;
    /**
     * deleteScoreComment - Delete a comment
    **/
    deleteScoreComment(req: operations.DeleteScoreCommentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScoreCommentResponse>;
    /**
     * deleteScoreTrack - Remove an audio or video track linked to the score
    **/
    deleteScoreTrack(req: operations.DeleteScoreTrackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScoreTrackResponse>;
    /**
     * editScore - Edit a score's metadata
     *
     * This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.
     *
     * To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).
     *
     * When editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.
     * This pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.
     *
    **/
    editScore(req: operations.EditScoreRequest, config?: AxiosRequestConfig): Promise<operations.EditScoreResponse>;
    /**
     * forkScore - Fork a score
     *
     * This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.
     *
     * When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.
     *
    **/
    forkScore(req: operations.ForkScoreRequest, config?: AxiosRequestConfig): Promise<operations.ForkScoreResponse>;
    /**
     * gerUserLikes - List liked scores
    **/
    gerUserLikes(req: operations.GerUserLikesRequest, config?: AxiosRequestConfig): Promise<operations.GerUserLikesResponse>;
    /**
     * getGroupScores - List group's scores
     *
     * Get the list of scores shared with a group.
     *
    **/
    getGroupScores(req: operations.GetGroupScoresRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupScoresResponse>;
    /**
     * getScore - Get a score's metadata
     *
     * Get the details of a score identified by the `score` parameter in the URL.
     * The currently authenticated user must have at least a read access to the document to use this API call.
     *
    **/
    getScore(req: operations.GetScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreResponse>;
    /**
     * getScoreCollaborator - Get a collaborator
     *
     * Get the information about a collaborator (User or Group).
     *
    **/
    getScoreCollaborator(req: operations.GetScoreCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreCollaboratorResponse>;
    /**
     * getScoreCollaborators - List the collaborators
     *
     * This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.
     *
     * Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).
     *
    **/
    getScoreCollaborators(req: operations.GetScoreCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreCollaboratorsResponse>;
    /**
     * getScoreComments - List comments
     *
     * This method lists the different comments added on a music score (documents and inline) sorted by their post dates.
    **/
    getScoreComments(req: operations.GetScoreCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreCommentsResponse>;
    /**
     * getScoreRevision - Get a score revision
     *
     * When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
     * revision metadata.
     *
    **/
    getScoreRevision(req: operations.GetScoreRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreRevisionResponse>;
    /**
     * getScoreRevisionData - Get a score revision data
     *
     * Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML
     * `mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.
     *
    **/
    getScoreRevisionData(req: operations.GetScoreRevisionDataRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreRevisionDataResponse>;
    /**
     * getScoreRevisions - List the revisions
     *
     * When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.
     *
     * Depending the plan of the account, this list can be trunked to the few last revisions.
     *
    **/
    getScoreRevisions(req: operations.GetScoreRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreRevisionsResponse>;
    /**
     * getScoreSubmissions - List submissions related to the score
     *
     * This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.
     *
    **/
    getScoreSubmissions(req: operations.GetScoreSubmissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreSubmissionsResponse>;
    /**
     * getScoreTrack - Retrieve the details of an audio or video track linked to a score
    **/
    getScoreTrack(req: operations.GetScoreTrackRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreTrackResponse>;
    /**
     * getUserScores - List user's scores
     *
     * Get the list of public scores owned by a User.
     *
     * **DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
     * This method will no longer list private and shared scores, but only public scores of a Flat account.
     * If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.
     *
    **/
    getUserScores(req: operations.GetUserScoresRequest, config?: AxiosRequestConfig): Promise<operations.GetUserScoresResponse>;
    /**
     * listScoreTracks - List the audio or video tracks linked to a score
    **/
    listScoreTracks(req: operations.ListScoreTracksRequest, config?: AxiosRequestConfig): Promise<operations.ListScoreTracksResponse>;
    /**
     * markScoreCommentResolved - Mark the comment as resolved
    **/
    markScoreCommentResolved(req: operations.MarkScoreCommentResolvedRequest, config?: AxiosRequestConfig): Promise<operations.MarkScoreCommentResolvedResponse>;
    /**
     * markScoreCommentUnresolved - Mark the comment as unresolved
    **/
    markScoreCommentUnresolved(req: operations.MarkScoreCommentUnresolvedRequest, config?: AxiosRequestConfig): Promise<operations.MarkScoreCommentUnresolvedResponse>;
    /**
     * postScoreComment - Post a new comment
     *
     * Post a document or a contextualized comment on a document.
     *
     * Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.
     *
    **/
    postScoreComment(req: operations.PostScoreCommentRequest, config?: AxiosRequestConfig): Promise<operations.PostScoreCommentResponse>;
    /**
     * removeScoreCollaborator - Delete a collaborator
     *
     * Remove the specified collaborator from the score
     *
    **/
    removeScoreCollaborator(req: operations.RemoveScoreCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.RemoveScoreCollaboratorResponse>;
    /**
     * untrashScore - Untrash a score
     *
     * This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.
     *
    **/
    untrashScore(req: operations.UntrashScoreRequest, config?: AxiosRequestConfig): Promise<operations.UntrashScoreResponse>;
    /**
     * updateScoreComment - Update an existing comment
    **/
    updateScoreComment(req: operations.UpdateScoreCommentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScoreCommentResponse>;
    /**
     * updateScoreTrack - Update an audio or video track linked to a score
    **/
    updateScoreTrack(req: operations.UpdateScoreTrackRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScoreTrackResponse>;
}
