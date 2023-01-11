import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateScoreCommentPathParams extends SpeakeasyBase {
    comment: string;
    score: string;
}
export declare class UpdateScoreCommentQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class UpdateScoreCommentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateScoreCommentRequest extends SpeakeasyBase {
    pathParams: UpdateScoreCommentPathParams;
    queryParams: UpdateScoreCommentQueryParams;
    request: shared.ScoreCommentUpdate;
    security: UpdateScoreCommentSecurity;
}
export declare class UpdateScoreCommentResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    scoreComment?: shared.ScoreComment;
    statusCode: number;
}
