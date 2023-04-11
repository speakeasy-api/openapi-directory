import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody extends SpeakeasyBase {
    /**
     * The names of the custom labels to add to the runner.
     */
    labels: string[];
}
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
    requestBody: ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody;
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
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject?: ActionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
