import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class CreatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    pathParams: CreatePipelineVariableForWorkspacePathParams;
    request?: Record<string, any>;
}
export declare class CreatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
