import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListDeploymentsRequest extends SpeakeasyBase {
    /**
     * The name of the environment that was deployed to (e.g., `staging` or `production`).
     */
    environment?: string;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * The name of the ref. This can be a branch, tag, or SHA.
     */
    ref?: string;
    repo: string;
    /**
     * The SHA recorded at creation time.
     */
    sha?: string;
    /**
     * The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
     */
    task?: string;
}
export declare class ReposListDeploymentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    deployments?: shared.Deployment[];
}
