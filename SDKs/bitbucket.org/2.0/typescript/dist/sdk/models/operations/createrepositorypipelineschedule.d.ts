import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateRepositoryPipelineScheduleRequest extends SpeakeasyBase {
    /**
     * The schedule to create.
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
export declare class CreateRepositoryPipelineScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * There were errors validating the request.
     */
    error?: Record<string, any>;
    /**
     * The created schedule.
     */
    pipelineSchedule?: Record<string, any>;
}
