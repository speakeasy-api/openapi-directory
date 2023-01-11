import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRepositoryPipelineVariablePathParams extends SpeakeasyBase {
    repoSlug: string;
    variableUuid: string;
    workspace: string;
}
export declare class GetRepositoryPipelineVariableRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineVariablePathParams;
}
export declare class GetRepositoryPipelineVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
