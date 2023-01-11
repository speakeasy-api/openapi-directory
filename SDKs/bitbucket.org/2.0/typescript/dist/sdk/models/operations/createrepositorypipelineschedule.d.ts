import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreateRepositoryPipelineScheduleRequest extends SpeakeasyBase {
    pathParams: CreateRepositoryPipelineSchedulePathParams;
    request: Record<string, any>;
}
export declare class CreateRepositoryPipelineScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineSchedule?: Record<string, any>;
}
