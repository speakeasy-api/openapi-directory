import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineTestReportsRequest extends SpeakeasyBase {
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
export declare class GetPipelineTestReportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No account, repository, pipeline, step or test reports exist for the provided path.
     */
    error?: Record<string, any>;
}
