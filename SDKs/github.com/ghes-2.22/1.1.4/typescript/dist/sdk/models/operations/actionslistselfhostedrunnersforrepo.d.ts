import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelfHostedRunnersForRepoRequest extends SpeakeasyBase {
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
export declare class ActionsListSelfHostedRunnersForRepo200ApplicationJSON extends SpeakeasyBase {
    runners: shared.RunnerNoLabels[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnersForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelfHostedRunnersForRepo200ApplicationJSONObject?: ActionsListSelfHostedRunnersForRepo200ApplicationJSON;
}
