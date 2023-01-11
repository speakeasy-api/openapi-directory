import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubmissionHistoryPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
    submission: string;
}
export declare class GetSubmissionHistorySecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSubmissionHistoryRequest extends SpeakeasyBase {
    pathParams: GetSubmissionHistoryPathParams;
    security: GetSubmissionHistorySecurity;
}
export declare class GetSubmissionHistoryResponse extends SpeakeasyBase {
    assignmentSubmissionHistories?: shared.AssignmentSubmissionHistory[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
