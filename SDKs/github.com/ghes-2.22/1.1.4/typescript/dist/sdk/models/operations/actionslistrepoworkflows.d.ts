import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListRepoWorkflowsRequest extends SpeakeasyBase {
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
 * Response
 */
export declare class ActionsListRepoWorkflows200ApplicationJSON extends SpeakeasyBase {
    totalCount: number;
    workflows: shared.Workflow[];
}
export declare class ActionsListRepoWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListRepoWorkflows200ApplicationJSONObject?: ActionsListRepoWorkflows200ApplicationJSON;
}
