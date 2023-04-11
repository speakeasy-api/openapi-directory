import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody extends SpeakeasyBase {
    /**
     * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
     */
    labels: string[];
}
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequest extends SpeakeasyBase {
    requestBody: ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
/**
 * Response
 */
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForRepo200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsSetCustomLabelsForSelfHostedRunnerForRepo200ApplicationJSONObject?: ActionsSetCustomLabelsForSelfHostedRunnerForRepo200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
