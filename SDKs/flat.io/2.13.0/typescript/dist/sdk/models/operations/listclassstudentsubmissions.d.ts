import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListClassStudentSubmissionsPathParams extends SpeakeasyBase {
    class: string;
    user: string;
}
export declare class ListClassStudentSubmissionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListClassStudentSubmissionsRequest extends SpeakeasyBase {
    pathParams: ListClassStudentSubmissionsPathParams;
    security: ListClassStudentSubmissionsSecurity;
}
export declare class ListClassStudentSubmissionsResponse extends SpeakeasyBase {
    assignmentSubmissions?: shared.AssignmentSubmission[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
