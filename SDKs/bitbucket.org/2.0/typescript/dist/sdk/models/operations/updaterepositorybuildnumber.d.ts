import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryBuildNumberPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class UpdateRepositoryBuildNumberRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryBuildNumberPathParams;
    request: Record<string, any>;
}
export declare class UpdateRepositoryBuildNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineBuildNumber?: Record<string, any>;
}
