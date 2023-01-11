import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPipelineForRepositoryPathParams extends SpeakeasyBase {
    pipelineUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetPipelineForRepositoryRequest extends SpeakeasyBase {
    pathParams: GetPipelineForRepositoryPathParams;
}
export declare class GetPipelineForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipeline?: Record<string, any>;
}
