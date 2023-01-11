import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSubmissionCommentPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    comment: string;
    submission: string;
}
export declare class UpdateSubmissionCommentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateSubmissionCommentRequest extends SpeakeasyBase {
    pathParams: UpdateSubmissionCommentPathParams;
    request: shared.AssignmentSubmissionCommentCreation;
    security: UpdateSubmissionCommentSecurity;
}
export declare class UpdateSubmissionCommentResponse extends SpeakeasyBase {
    assignmentSubmissionComment?: shared.AssignmentSubmissionComment;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
