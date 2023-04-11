import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoryPipelineScheduleExecutionsRequest extends SpeakeasyBase {
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
export declare class GetRepositoryPipelineScheduleExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or repository was not found.
     */
    error?: Record<string, any>;
    /**
     * The list of executions of a schedule.
     */
    paginatedPipelineScheduleExecutions?: shared.PaginatedPipelineScheduleExecutions;
}
