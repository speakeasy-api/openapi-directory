import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePipelineVariableForUserRequest extends SpeakeasyBase {
    /**
     * The updated variable.
     */
    requestBody: Record<string, any>;
    /**
     * Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.
     */
    selectedUser: string;
    /**
     * The UUID of the variable.
     */
    variableUuid: string;
}
export declare class UpdatePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or the variable was not found.
     */
    error?: Record<string, any>;
    /**
     * The variable was updated.
     */
    pipelineVariable?: Record<string, any>;
}
