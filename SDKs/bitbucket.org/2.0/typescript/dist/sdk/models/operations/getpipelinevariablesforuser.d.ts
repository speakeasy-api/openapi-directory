import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPipelineVariablesForUserRequest extends SpeakeasyBase {
    /**
     * Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.
     */
    selectedUser: string;
}
export declare class GetPipelineVariablesForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The found user level variables.
     */
    paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
