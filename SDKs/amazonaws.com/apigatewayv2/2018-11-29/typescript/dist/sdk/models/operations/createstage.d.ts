import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStagePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateStageHeaders extends SpeakeasyBase {
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
export declare class CreateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
    destinationArn?: Record<string, any>;
    format?: Record<string, any>;
}
/**
 * Represents a collection of route settings.
**/
export declare class CreateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: Record<string, any>;
    detailedMetricsEnabled?: Record<string, any>;
    loggingLevel?: Record<string, any>;
    throttlingBurstLimit?: Record<string, any>;
    throttlingRateLimit?: Record<string, any>;
}
export declare class CreateStageRequestBody extends SpeakeasyBase {
    accessLogSettings?: CreateStageRequestBodyAccessLogSettings;
    autoDeploy?: boolean;
    clientCertificateId?: string;
    defaultRouteSettings?: CreateStageRequestBodyDefaultRouteSettings;
    deploymentId?: string;
    description?: string;
    routeSettings?: Record<string, shared.RouteSettings>;
    stageName: string;
    stageVariables?: Record<string, string>;
    tags?: Record<string, string>;
}
export declare class CreateStageRequest extends SpeakeasyBase {
    pathParams: CreateStagePathParams;
    headers: CreateStageHeaders;
    request: CreateStageRequestBody;
}
export declare class CreateStageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createStageResponse?: shared.CreateStageResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
