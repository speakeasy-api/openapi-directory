import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubmissionPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    submission: string;
}
export declare class GetSubmissionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSubmissionRequest extends SpeakeasyBase {
    pathParams: GetSubmissionPathParams;
    security: GetSubmissionSecurity;
}
export declare class GetSubmissionResponse extends SpeakeasyBase {
    assignmentSubmission?: shared.AssignmentSubmission;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
