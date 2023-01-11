import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineVariableForTeamPathParams extends SpeakeasyBase {
    username: string;
}
export declare class CreatePipelineVariableForTeamQueryParams extends SpeakeasyBase {
    workspace: string;
}
export declare class CreatePipelineVariableForTeamRequest extends SpeakeasyBase {
    pathParams: CreatePipelineVariableForTeamPathParams;
    queryParams: CreatePipelineVariableForTeamQueryParams;
    request?: Record<string, any>;
}
export declare class CreatePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
