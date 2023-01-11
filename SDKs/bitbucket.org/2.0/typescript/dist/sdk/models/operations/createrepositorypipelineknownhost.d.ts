import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    pathParams: CreateRepositoryPipelineKnownHostPathParams;
    request: Record<string, any>;
}
export declare class CreateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    pipelineKnownHost?: Record<string, any>;
}
