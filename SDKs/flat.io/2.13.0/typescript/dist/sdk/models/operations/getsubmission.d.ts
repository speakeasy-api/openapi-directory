import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubmissionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSubmissionRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
    /**
     * Unique identifier of the submission
     */
    submission: string;
}
export declare class GetSubmissionResponse extends SpeakeasyBase {
    /**
     * A submission
     */
    assignmentSubmission?: shared.AssignmentSubmission;
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
