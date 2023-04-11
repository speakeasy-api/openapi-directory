import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    /**
     * The updated variable.
     */
    requestBody: Record<string, any>;
    /**
     * The UUID of the variable.
     */
    variableUuid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class UpdatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The workspace or the variable was not found.
     */
    error?: Record<string, any>;
    /**
     * The variable was updated.
     */
    pipelineVariable?: Record<string, any>;
}
