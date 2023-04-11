import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRepositoryPipelineScheduleRequest extends SpeakeasyBase {
    /**
     * The schedule to update.
     */
    requestBody: Record<string, any>;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The uuid of the schedule.
     */
    scheduleUuid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class UpdateRepositoryPipelineScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account, repository or schedule was not found.
     */
    error?: Record<string, any>;
    /**
     * The schedule is updated.
     */
    pipelineSchedule?: Record<string, any>;
}
