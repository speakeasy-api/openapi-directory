import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
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
export declare class ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSONObject?: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
