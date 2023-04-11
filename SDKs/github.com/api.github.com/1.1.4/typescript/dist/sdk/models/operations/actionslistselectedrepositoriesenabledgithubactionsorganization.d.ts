import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
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
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.Repository[];
    totalCount: number;
}
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject?: ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON;
}
