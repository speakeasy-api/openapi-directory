import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePipelineVariableForUserPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class CreatePipelineVariableForUserRequest extends SpeakeasyBase {
    pathParams: CreatePipelineVariableForUserPathParams;
    request?: Record<string, any>;
}
export declare class CreatePipelineVariableForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    pipelineVariable?: Record<string, any>;
}
