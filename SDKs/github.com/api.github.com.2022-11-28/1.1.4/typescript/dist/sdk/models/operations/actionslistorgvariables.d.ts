import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListOrgVariablesRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 30).
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class ActionsListOrgVariables200ApplicationJSON extends SpeakeasyBase {
    totalCount: number;
    variables: shared.OrganizationActionsVariable[];
}
export declare class ActionsListOrgVariablesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListOrgVariables200ApplicationJSONObject?: ActionsListOrgVariables200ApplicationJSON;
}
