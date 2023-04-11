import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsDismissReviewRequestBody extends SpeakeasyBase {
    event?: string;
    /**
     * The message for the pull request review dismissal
     */
    message: string;
}
export declare class PullsDismissReviewRequest extends SpeakeasyBase {
    requestBody: PullsDismissReviewRequestBody;
    owner: string;
    pullNumber: number;
    repo: string;
    /**
     * review_id parameter
     */
    reviewId: number;
}
export declare class PullsDismissReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    pullRequestReview?: shared.PullRequestReview;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
