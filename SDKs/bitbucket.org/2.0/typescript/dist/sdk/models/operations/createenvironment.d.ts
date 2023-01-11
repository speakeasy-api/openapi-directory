import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEnvironmentPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    pathParams: CreateEnvironmentPathParams;
    request: Record<string, any>;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deploymentEnvironment?: Record<string, any>;
    error?: Record<string, any>;
}
