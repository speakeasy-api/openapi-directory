import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSubmissionPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
}
export declare class CreateSubmissionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateSubmissionRequest extends SpeakeasyBase {
    pathParams: CreateSubmissionPathParams;
    request: shared.AssignmentSubmissionUpdate;
    security: CreateSubmissionSecurity;
}
export declare class CreateSubmissionResponse extends SpeakeasyBase {
    assignmentSubmission?: shared.AssignmentSubmission;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
