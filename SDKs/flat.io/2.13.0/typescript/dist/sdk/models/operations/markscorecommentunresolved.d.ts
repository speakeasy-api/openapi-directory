import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MarkScoreCommentUnresolvedPathParams extends SpeakeasyBase {
    comment: string;
    score: string;
}
export declare class MarkScoreCommentUnresolvedQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class MarkScoreCommentUnresolvedSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class MarkScoreCommentUnresolvedRequest extends SpeakeasyBase {
    pathParams: MarkScoreCommentUnresolvedPathParams;
    queryParams: MarkScoreCommentUnresolvedQueryParams;
    security: MarkScoreCommentUnresolvedSecurity;
}
export declare class MarkScoreCommentUnresolvedResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
