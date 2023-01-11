import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineKeyPairPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineKeyPairRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineKeyPairPathParams;
    request: Record<string, any>;
}
export declare class UpdateRepositoryPipelineKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineSshKeyPair?: Record<string, any>;
}
