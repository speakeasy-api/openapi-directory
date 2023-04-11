import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Settings for logging access in a stage.
 */
export declare class CreateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
    destinationArn?: string;
    format?: string;
}
/**
 * Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
 */
export declare enum CreateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum {
    Error = "ERROR",
    Info = "INFO",
    Off = "OFF"
}
/**
 * Represents a collection of route settings.
 */
export declare class CreateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: boolean;
    detailedMetricsEnabled?: boolean;
    loggingLevel?: CreateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
}
export declare class CreateStageRequestBody extends SpeakeasyBase {
    /**
     * Settings for logging access in a stage.
     */
    accessLogSettings?: CreateStageRequestBodyAccessLogSettings;
    /**
     * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
     */
    autoDeploy?: boolean;
    /**
     * The identifier.
     */
    clientCertificateId?: string;
    /**
     * Represents a collection of route settings.
     */
    defaultRouteSettings?: CreateStageRequestBodyDefaultRouteSettings;
    /**
     * The identifier.
     */
    deploymentId?: string;
    /**
     * A string with a length between [0-1024].
     */
    description?: string;
    /**
     * The route settings map.
     */
    routeSettings?: Record<string, shared.RouteSettings>;
    /**
     * A string with a length between [1-128].
     */
    stageName: string;
    /**
     * The stage variable map.
     */
    stageVariables?: Record<string, string>;
    /**
     * Represents a collection of tags associated with the resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateStageRequest extends SpeakeasyBase {
    requestBody: CreateStageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API identifier.
     */
    apiId: string;
}
export declare class CreateStageResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createStageResponse?: shared.CreateStageResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
