import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineForRepositoryRequest extends SpeakeasyBase {
    /**
     * The pipeline UUID.
     */
    pipelineUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetPipelineForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No account, repository or pipeline with the UUID provided exists.
     */
    error?: Record<string, any>;
    /**
     * The pipeline.
     */
    pipeline?: Record<string, any>;
}
