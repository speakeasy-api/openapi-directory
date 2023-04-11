import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsUpdateReviewRequestBody extends SpeakeasyBase {
    /**
     * The body text of the pull request review.
     */
    body: string;
}
export declare class PullsUpdateReviewRequest extends SpeakeasyBase {
    requestBody: PullsUpdateReviewRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The number that identifies the pull request.
     */
    pullNumber: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the review.
     */
    reviewId: number;
}
export declare class PullsUpdateReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestReview?: shared.PullRequestReview;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
