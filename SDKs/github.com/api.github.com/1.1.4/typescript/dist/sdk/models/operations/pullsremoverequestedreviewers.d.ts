import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsRemoveRequestedReviewersRequestBody extends SpeakeasyBase {
    /**
     * An array of user `login`s that will be removed.
     */
    reviewers: string[];
    /**
     * An array of team `slug`s that will be removed.
     */
    teamReviewers?: string[];
}
export declare class PullsRemoveRequestedReviewersRequest extends SpeakeasyBase {
    requestBody: PullsRemoveRequestedReviewersRequestBody;
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
}
export declare class PullsRemoveRequestedReviewersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestSimple?: shared.PullRequestSimple;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
