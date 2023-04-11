import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListEnvironmentVariablesRequest extends SpeakeasyBase {
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 30).
     */
    perPage?: number;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
}
/**
 * Response
 */
export declare class ActionsListEnvironmentVariables200ApplicationJSON extends SpeakeasyBase {
    totalCount: number;
    variables: shared.ActionsVariable[];
}
export declare class ActionsListEnvironmentVariablesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListEnvironmentVariables200ApplicationJSONObject?: ActionsListEnvironmentVariables200ApplicationJSON;
}
