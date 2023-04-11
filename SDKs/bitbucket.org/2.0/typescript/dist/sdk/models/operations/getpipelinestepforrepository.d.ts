import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineStepForRepositoryRequest extends SpeakeasyBase {
    /**
     * The UUID of the pipeline.
     */
    pipelineUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The UUID of the step.
     */
    stepUuid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetPipelineStepForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No account, repository, pipeline or step with the UUID provided exists for the pipeline with the UUID provided.
     */
    error?: Record<string, any>;
    /**
     * The step.
     */
    pipelineStep?: Record<string, any>;
}
