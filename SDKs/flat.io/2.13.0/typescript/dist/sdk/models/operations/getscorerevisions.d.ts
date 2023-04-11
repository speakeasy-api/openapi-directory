import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScoreRevisionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetScoreRevisionsRequest extends SpeakeasyBase {
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
export declare class GetScoreRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Account overquota
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * List of revisions
     */
    scoreRevisions?: shared.ScoreRevision[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
