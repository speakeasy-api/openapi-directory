import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteScoreCommentPathParams extends SpeakeasyBase {
    comment: string;
    score: string;
}
export declare class DeleteScoreCommentQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class DeleteScoreCommentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteScoreCommentRequest extends SpeakeasyBase {
    pathParams: DeleteScoreCommentPathParams;
    queryParams: DeleteScoreCommentQueryParams;
    security: DeleteScoreCommentSecurity;
}
export declare class DeleteScoreCommentResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
