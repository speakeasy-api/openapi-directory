import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePipelineVariableForWorkspacePathParams extends SpeakeasyBase {
    variableUuid: string;
    workspace: string;
}
export declare class UpdatePipelineVariableForWorkspaceRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineVariableForWorkspacePathParams;
    request: Record<string, any>;
}
export declare class UpdatePipelineVariableForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
