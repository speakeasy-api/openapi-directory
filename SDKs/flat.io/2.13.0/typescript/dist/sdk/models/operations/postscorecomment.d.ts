import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostScoreCommentPathParams extends SpeakeasyBase {
    score: string;
}
export declare class PostScoreCommentQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class PostScoreCommentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostScoreCommentRequest extends SpeakeasyBase {
    pathParams: PostScoreCommentPathParams;
    queryParams: PostScoreCommentQueryParams;
    request: shared.ScoreCommentCreation;
    security: PostScoreCommentSecurity;
}
export declare class PostScoreCommentResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreComment?: shared.ScoreComment;
    statusCode: number;
}
