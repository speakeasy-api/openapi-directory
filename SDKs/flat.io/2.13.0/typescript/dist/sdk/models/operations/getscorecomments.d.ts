import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScoreCommentsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Sort direction
 */
export declare enum GetScoreCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Sort
 */
export declare enum GetScoreCommentsSortEnum {
    Date = "date"
}
/**
 * Filter the comments by type
 */
export declare enum GetScoreCommentsTypeEnum {
    Document = "document",
    Inline = "inline"
}
export declare class GetScoreCommentsRequest extends SpeakeasyBase {
    /**
     * Sort direction
     */
    direction?: GetScoreCommentsDirectionEnum;
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
    /**
     * Sort
     */
    sort?: GetScoreCommentsSortEnum;
    /**
     * Filter the comments by type
     */
    type?: GetScoreCommentsTypeEnum;
}
export declare class GetScoreCommentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Account overquota
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * The comments of the score
     */
    scoreComments?: shared.ScoreComment[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
