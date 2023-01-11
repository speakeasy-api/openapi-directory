import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScoreCommentsPathParams extends SpeakeasyBase {
    score: string;
}
export declare enum GetScoreCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetScoreCommentsSortEnum {
    Date = "date"
}
export declare enum GetScoreCommentsTypeEnum {
    Document = "document",
    Inline = "inline"
}
export declare class GetScoreCommentsQueryParams extends SpeakeasyBase {
    direction?: GetScoreCommentsDirectionEnum;
    sharingKey?: string;
    sort?: GetScoreCommentsSortEnum;
    type?: GetScoreCommentsTypeEnum;
}
export declare class GetScoreCommentsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreCommentsRequest extends SpeakeasyBase {
    pathParams: GetScoreCommentsPathParams;
    queryParams: GetScoreCommentsQueryParams;
    security: GetScoreCommentsSecurity;
}
export declare class GetScoreCommentsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreComments?: shared.ScoreComment[];
    statusCode: number;
}
