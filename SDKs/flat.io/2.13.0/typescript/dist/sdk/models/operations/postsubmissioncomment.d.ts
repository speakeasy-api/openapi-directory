import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSubmissionCommentPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    submission: string;
}
export declare class PostSubmissionCommentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostSubmissionCommentRequest extends SpeakeasyBase {
    pathParams: PostSubmissionCommentPathParams;
    request: shared.AssignmentSubmissionCommentCreation;
    security: PostSubmissionCommentSecurity;
}
export declare class PostSubmissionCommentResponse extends SpeakeasyBase {
    assignmentSubmissionComment?: shared.AssignmentSubmissionComment;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
