import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsRequestReviewersRequestBody2 extends SpeakeasyBase {
    /**
     * An array of user `login`s that will be requested.
     */
    reviewers?: string[];
    /**
     * An array of team `slug`s that will be requested.
     */
    teamReviewers: string[];
}
export declare class PullsRequestReviewersRequestBody1 extends SpeakeasyBase {
    /**
     * An array of user `login`s that will be requested.
     */
    reviewers: string[];
    /**
     * An array of team `slug`s that will be requested.
     */
    teamReviewers?: string[];
}
export declare class PullsRequestReviewersRequest extends SpeakeasyBase {
    requestBody?: any;
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsRequestReviewersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    pullRequestSimple?: shared.PullRequestSimple;
}
