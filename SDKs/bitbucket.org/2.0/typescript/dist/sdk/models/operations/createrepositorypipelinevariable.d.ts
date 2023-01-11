import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateRepositoryPipelineVariablePathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreateRepositoryPipelineVariableRequest extends SpeakeasyBase {
    pathParams: CreateRepositoryPipelineVariablePathParams;
    request: Record<string, any>;
}
export declare class CreateRepositoryPipelineVariableResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
