import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    /**
     * The variable to create.
     */
    requestBody?: Record<string, any>;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class CreatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The workspace does not exist.
     */
    error?: Record<string, any>;
    /**
     * The created variable.
     */
    pipelineVariable?: Record<string, any>;
}
