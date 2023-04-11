import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListPullRequestsAssociatedWithCommitRequest extends SpeakeasyBase {
    /**
     * commit_sha parameter
     */
    commitSha: string;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
}
/**
 * Preview header missing
 */
export declare class ReposListPullRequestsAssociatedWithCommit415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposListPullRequestsAssociatedWithCommitResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestSimples?: shared.PullRequestSimple[];
    /**
     * Preview header missing
     */
    reposListPullRequestsAssociatedWithCommit415ApplicationJSONObject?: ReposListPullRequestsAssociatedWithCommit415ApplicationJSON;
}
