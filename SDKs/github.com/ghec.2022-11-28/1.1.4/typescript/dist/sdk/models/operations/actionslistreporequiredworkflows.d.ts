import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListRepoRequiredWorkflowsRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Response
 */
export declare class ActionsListRepoRequiredWorkflows200ApplicationJSON extends SpeakeasyBase {
    requiredWorkflows: shared.RepoRequiredWorkflow[];
    totalCount: number;
}
export declare class ActionsListRepoRequiredWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListRepoRequiredWorkflows200ApplicationJSONObject?: ActionsListRepoRequiredWorkflows200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
