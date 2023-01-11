import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeploymentVariablePathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    variableUuid: string;
    workspace: string;
}
export declare class UpdateDeploymentVariableRequest extends SpeakeasyBase {
    pathParams: UpdateDeploymentVariablePathParams;
    request: Record<string, any>;
}
export declare class UpdateDeploymentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deploymentVariable?: Record<string, any>;
    error?: Record<string, any>;
}
