import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScoreSubmissionsPathParams extends SpeakeasyBase {
    score: string;
}
export declare class GetScoreSubmissionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreSubmissionsRequest extends SpeakeasyBase {
    pathParams: GetScoreSubmissionsPathParams;
    security: GetScoreSubmissionsSecurity;
}
export declare class GetScoreSubmissionsResponse extends SpeakeasyBase {
    assignmentSubmissions?: shared.AssignmentSubmission[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
