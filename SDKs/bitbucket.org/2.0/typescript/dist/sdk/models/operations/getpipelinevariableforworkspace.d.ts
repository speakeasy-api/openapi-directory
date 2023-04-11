import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    /**
     * The UUID of the variable to retrieve.
     */
    variableUuid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetPipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The workspace or variable with the given UUID was not found.
     */
    error?: Record<string, any>;
    /**
     * The variable.
     */
    pipelineVariable?: Record<string, any>;
}
