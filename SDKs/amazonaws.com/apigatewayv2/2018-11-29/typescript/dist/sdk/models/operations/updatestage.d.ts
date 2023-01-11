import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStagePathParams extends SpeakeasyBase {
    apiId: string;
    stageName: string;
}
export declare class UpdateStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Settings for logging access in a stage.
**/
export declare class UpdateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
    destinationArn?: Record<string, any>;
    format?: Record<string, any>;
}
/**
 * Represents a collection of route settings.
**/
export declare class UpdateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: Record<string, any>;
    detailedMetricsEnabled?: Record<string, any>;
    loggingLevel?: Record<string, any>;
    throttlingBurstLimit?: Record<string, any>;
    throttlingRateLimit?: Record<string, any>;
}
export declare class UpdateStageRequestBody extends SpeakeasyBase {
    accessLogSettings?: UpdateStageRequestBodyAccessLogSettings;
    autoDeploy?: boolean;
    clientCertificateId?: string;
    defaultRouteSettings?: UpdateStageRequestBodyDefaultRouteSettings;
    deploymentId?: string;
    description?: string;
    routeSettings?: Record<string, shared.RouteSettings>;
    stageVariables?: Record<string, string>;
}
export declare class UpdateStageRequest extends SpeakeasyBase {
    pathParams: UpdateStagePathParams;
    headers: UpdateStageHeaders;
    request: UpdateStageRequestBody;
}
export declare class UpdateStageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateStageResponse?: shared.UpdateStageResponse;
}
