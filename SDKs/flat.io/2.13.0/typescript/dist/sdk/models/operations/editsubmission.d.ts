import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditSubmissionPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    submission: string;
}
export declare class EditSubmissionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class EditSubmissionRequest extends SpeakeasyBase {
    pathParams: EditSubmissionPathParams;
    request: shared.AssignmentSubmissionUpdate;
    security: EditSubmissionSecurity;
}
export declare class EditSubmissionResponse extends SpeakeasyBase {
    assignmentSubmission?: shared.AssignmentSubmission;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
