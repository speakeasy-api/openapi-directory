import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePipelineVariableForUserPathParams extends SpeakeasyBase {
    selectedUser: string;
    variableUuid: string;
}
export declare class UpdatePipelineVariableForUserRequest extends SpeakeasyBase {
    pathParams: UpdatePipelineVariableForUserPathParams;
    request: Record<string, any>;
}
export declare class UpdatePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
