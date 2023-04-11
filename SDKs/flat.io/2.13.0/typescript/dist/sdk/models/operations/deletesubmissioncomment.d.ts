import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSubmissionCommentSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteSubmissionCommentRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
    /**
     * Unique identifier of the comment
     */
    comment: string;
    /**
     * Unique identifier of the submission
     */
    submission: string;
}
export declare class DeleteSubmissionCommentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
