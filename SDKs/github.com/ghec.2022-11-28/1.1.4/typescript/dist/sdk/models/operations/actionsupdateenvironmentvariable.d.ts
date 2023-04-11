import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsUpdateEnvironmentVariableRequestBody extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name?: string;
    /**
     * The value of the variable.
     */
    value?: string;
}
export declare class ActionsUpdateEnvironmentVariableRequest extends SpeakeasyBase {
    requestBody: ActionsUpdateEnvironmentVariableRequestBody;
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
}
export declare class ActionsUpdateEnvironmentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
