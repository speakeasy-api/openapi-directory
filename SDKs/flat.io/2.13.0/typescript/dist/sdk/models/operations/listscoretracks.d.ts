import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListScoreTracksSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ListScoreTracksRequest extends SpeakeasyBase {
    /**
     * An assignment id with which all the tracks returned will be related to
     *
     * @remarks
     *
     */
    assignment?: string;
    /**
     * If true, and if available, return last automatically synchronized Flat's mp3 export as an additional track
     *
     * @remarks
     *
     */
    listAutoTrack?: boolean;
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
    /**
     * This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
     *
     * @remarks
     *
     */
    sharingKey?: string;
}
export declare class ListScoreTracksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not granted to access to this score
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * List of tracks
     */
    scoreTracks?: shared.ScoreTrack[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
