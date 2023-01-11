import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineConfigPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineConfigRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineConfigPathParams;
    request: Record<string, any>;
}
export declare class UpdateRepositoryPipelineConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pipelinesConfig?: Record<string, any>;
}
