import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
    repoSlug: string;
    scheduleUuid: string;
    workspace: string;
}
export declare class UpdateRepositoryPipelineScheduleRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryPipelineSchedulePathParams;
    request: Record<string, any>;
}
export declare class UpdateRepositoryPipelineScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineSchedule?: Record<string, any>;
}
