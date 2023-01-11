import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MarkScoreCommentResolvedPathParams extends SpeakeasyBase {
    comment: string;
    score: string;
}
export declare class MarkScoreCommentResolvedQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class MarkScoreCommentResolvedSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class MarkScoreCommentResolvedRequest extends SpeakeasyBase {
    pathParams: MarkScoreCommentResolvedPathParams;
    queryParams: MarkScoreCommentResolvedQueryParams;
    security: MarkScoreCommentResolvedSecurity;
}
export declare class MarkScoreCommentResolvedResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
