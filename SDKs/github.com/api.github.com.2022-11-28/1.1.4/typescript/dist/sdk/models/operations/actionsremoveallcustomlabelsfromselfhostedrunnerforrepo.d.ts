import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequest extends SpeakeasyBase {
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
export declare class ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo200ApplicationJSONObject?: ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
