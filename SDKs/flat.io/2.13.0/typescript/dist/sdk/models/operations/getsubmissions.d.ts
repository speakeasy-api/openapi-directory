import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubmissionsPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
}
export declare class GetSubmissionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSubmissionsRequest extends SpeakeasyBase {
    pathParams: GetSubmissionsPathParams;
    security: GetSubmissionsSecurity;
}
export declare class GetSubmissionsResponse extends SpeakeasyBase {
    assignmentSubmissions?: shared.AssignmentSubmission[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
