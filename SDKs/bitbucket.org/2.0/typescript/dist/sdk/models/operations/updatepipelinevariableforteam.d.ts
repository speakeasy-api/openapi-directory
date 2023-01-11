import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePipelineVariableForTeamPathParams extends SpeakeasyBase {
    username: string;
    variableUuid: string;
}
export declare class UpdatePipelineVariableForTeamRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineVariableForTeamPathParams;
    request: Record<string, any>;
}
export declare class UpdatePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
