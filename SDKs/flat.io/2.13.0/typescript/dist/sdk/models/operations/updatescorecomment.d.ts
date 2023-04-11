import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateScoreCommentSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateScoreCommentRequest extends SpeakeasyBase {
    scoreCommentUpdate: shared.ScoreCommentUpdate;
    /**
     * Unique identifier of a sheet music comment
     *
     * @remarks
     *
     */
    comment: string;
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
export declare class UpdateScoreCommentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Account overquota
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * The edited comment
     */
    scoreComment?: shared.ScoreComment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
