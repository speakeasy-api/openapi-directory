import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListRepoVariablesRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 30).
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
export declare class ActionsListRepoVariables200ApplicationJSON extends SpeakeasyBase {
    totalCount: number;
    variables: shared.ActionsVariable[];
}
export declare class ActionsListRepoVariablesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListRepoVariables200ApplicationJSONObject?: ActionsListRepoVariables200ApplicationJSON;
}
