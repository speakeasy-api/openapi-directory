import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePipelineForRepositoryRequest extends SpeakeasyBase {
    /**
     * The pipeline to initiate.
     */
    requestBody: Record<string, any>;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class CreatePipelineForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or repository is not enabled, the yml file does not exist in the repository for the given revision, or the request body contained invalid properties.
     */
    error?: Record<string, any>;
    /**
     * The initiated pipeline.
     */
    pipeline?: Record<string, any>;
}
