import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineVariableForUserRequest extends SpeakeasyBase {
    /**
     * Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.
     */
    selectedUser: string;
    /**
     * The UUID of the variable to retrieve.
     */
    variableUuid: string;
}
export declare class GetPipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or variable with the given UUID was not found.
     */
    error?: Record<string, any>;
    /**
     * The variable.
     */
    pipelineVariable?: Record<string, any>;
}
