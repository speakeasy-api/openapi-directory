import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSubmissionCommentPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    comment: string;
    submission: string;
}
export declare class DeleteSubmissionCommentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteSubmissionCommentRequest extends SpeakeasyBase {
    pathParams: DeleteSubmissionCommentPathParams;
    security: DeleteSubmissionCommentSecurity;
}
export declare class DeleteSubmissionCommentResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
