import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoryPipelineSchedulesRequest extends SpeakeasyBase {
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetRepositoryPipelineSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or repository was not found.
     */
    error?: Record<string, any>;
    /**
     * The list of schedules.
     */
    paginatedPipelineSchedules?: shared.PaginatedPipelineSchedules;
}
