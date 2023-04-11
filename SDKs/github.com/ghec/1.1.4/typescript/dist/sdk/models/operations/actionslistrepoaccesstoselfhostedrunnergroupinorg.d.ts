import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
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
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
/**
 * Response
 */
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.MinimalRepository[];
    totalCount: number;
}
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject?: ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON;
}
