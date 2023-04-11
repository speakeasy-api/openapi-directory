import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListClassStudentSubmissionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ListClassStudentSubmissionsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the class
     */
    class: string;
    /**
     * Unique identifier of the user
     */
    user: string;
}
export declare class ListClassStudentSubmissionsResponse extends SpeakeasyBase {
    /**
     * The list of submissions
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
