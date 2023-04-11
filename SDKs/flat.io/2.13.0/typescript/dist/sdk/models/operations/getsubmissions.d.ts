import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubmissionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSubmissionsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class GetSubmissionsResponse extends SpeakeasyBase {
    /**
     * The submissions
     */
    assignmentSubmissions?: shared.AssignmentSubmission[];
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
