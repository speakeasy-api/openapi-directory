import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsCreateEnvironmentVariableRequestBody extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The value of the variable.
     */
    value: string;
}
export declare class ActionsCreateEnvironmentVariableRequest extends SpeakeasyBase {
    requestBody: ActionsCreateEnvironmentVariableRequestBody;
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
}
export declare class ActionsCreateEnvironmentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    emptyObject?: Record<string, any>;
}
