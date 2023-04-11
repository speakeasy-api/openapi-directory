import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListLabelsForSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
/**
 * Response
 */
export declare class ActionsListLabelsForSelfHostedRunnerForOrg200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsListLabelsForSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject?: ActionsListLabelsForSelfHostedRunnerForOrg200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
