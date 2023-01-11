import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubmissionCommentsPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    submission: string;
}
export declare class GetSubmissionCommentsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSubmissionCommentsRequest extends SpeakeasyBase {
    pathParams: GetSubmissionCommentsPathParams;
    security: GetSubmissionCommentsSecurity;
}
export declare class GetSubmissionCommentsResponse extends SpeakeasyBase {
    assignmentSubmissionComments?: shared.AssignmentSubmissionComment[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
