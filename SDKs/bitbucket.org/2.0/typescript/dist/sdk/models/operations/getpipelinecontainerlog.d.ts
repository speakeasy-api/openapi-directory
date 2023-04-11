import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineContainerLogRequest extends SpeakeasyBase {
    /**
     * For the main build container specify the step UUID; for a service container specify the service container UUID
     */
    logUuid: string;
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
export declare class GetPipelineContainerLogResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
