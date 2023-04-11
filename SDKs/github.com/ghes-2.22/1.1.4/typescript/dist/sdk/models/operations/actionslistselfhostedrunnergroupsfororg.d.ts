import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelfHostedRunnerGroupsForOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON extends SpeakeasyBase {
    runnerGroups: shared.RunnerGroupsOrg[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnerGroupsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject?: ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON;
}
