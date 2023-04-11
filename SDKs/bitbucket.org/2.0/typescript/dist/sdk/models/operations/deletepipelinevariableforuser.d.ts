import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePipelineVariableForUserRequest extends SpeakeasyBase {
    /**
     * Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.
     */
    selectedUser: string;
    /**
     * The UUID of the variable to delete.
     */
    variableUuid: string;
}
export declare class DeletePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or the variable with the provided UUID does not exist.
     */
    error?: Record<string, any>;
}
