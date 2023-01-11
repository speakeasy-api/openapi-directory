import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineForRepositoryPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreatePipelineForRepositoryRequest extends SpeakeasyBase {
    pathParams: CreatePipelineForRepositoryPathParams;
    request: Record<string, any>;
}
export declare class CreatePipelineForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    pipeline?: Record<string, any>;
}
