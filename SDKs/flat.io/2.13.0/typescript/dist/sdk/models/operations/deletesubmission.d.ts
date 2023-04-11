import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSubmissionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteSubmissionRequest extends SpeakeasyBase {
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
export declare class DeleteSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
