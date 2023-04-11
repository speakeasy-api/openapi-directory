import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListRequiredWorkflowsRequest extends SpeakeasyBase {
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
}
/**
 * Response
 */
export declare class ActionsListRequiredWorkflows200ApplicationJSON extends SpeakeasyBase {
    requiredWorkflows: shared.RequiredWorkflow[];
    totalCount: number;
}
export declare class ActionsListRequiredWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListRequiredWorkflows200ApplicationJSONObject?: ActionsListRequiredWorkflows200ApplicationJSON;
}
