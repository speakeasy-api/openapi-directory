import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePipelineVariableForUserRequest extends SpeakeasyBase {
    /**
     * The variable to create.
     */
    requestBody?: Record<string, any>;
    /**
     * Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.
     */
    selectedUser: string;
}
export declare class CreatePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account does not exist.
     */
    error?: Record<string, any>;
    /**
     * The created variable.
     */
    pipelineVariable?: Record<string, any>;
}
