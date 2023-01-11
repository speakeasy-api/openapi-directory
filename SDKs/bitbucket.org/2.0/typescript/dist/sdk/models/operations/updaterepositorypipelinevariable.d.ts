import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineVariablePathParams extends SpeakeasyBase {
    repoSlug: string;
    variableUuid: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineVariableRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineVariablePathParams;
    request: Record<string, any>;
}
export declare class UpdateRepositoryPipelineVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
