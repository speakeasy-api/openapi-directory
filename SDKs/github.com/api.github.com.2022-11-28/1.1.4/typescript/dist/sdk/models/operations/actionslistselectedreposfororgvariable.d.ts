import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelectedReposForOrgVariableRequest extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name: string;
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
export declare class ActionsListSelectedReposForOrgVariable200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.MinimalRepository[];
    totalCount: number;
}
export declare class ActionsListSelectedReposForOrgVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelectedReposForOrgVariable200ApplicationJSONObject?: ActionsListSelectedReposForOrgVariable200ApplicationJSON;
}
