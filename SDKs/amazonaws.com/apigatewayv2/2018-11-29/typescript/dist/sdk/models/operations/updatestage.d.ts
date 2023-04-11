import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Settings for logging access in a stage.
 */
export declare class UpdateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
    destinationArn?: string;
    format?: string;
}
/**
 * Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
 */
export declare enum UpdateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum {
    Error = "ERROR",
    Info = "INFO",
    Off = "OFF"
}
/**
 * Represents a collection of route settings.
 */
export declare class UpdateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: boolean;
    detailedMetricsEnabled?: boolean;
    loggingLevel?: UpdateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
}
export declare class UpdateStageRequestBody extends SpeakeasyBase {
    /**
     * Settings for logging access in a stage.
     */
    accessLogSettings?: UpdateStageRequestBodyAccessLogSettings;
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
    defaultRouteSettings?: UpdateStageRequestBodyDefaultRouteSettings;
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
     * The stage variable map.
     */
    stageVariables?: Record<string, string>;
}
export declare class UpdateStageRequest extends SpeakeasyBase {
    requestBody: UpdateStageRequestBody;
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
    /**
     * The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.
     */
    stageName: string;
}
export declare class UpdateStageResponse extends SpeakeasyBase {
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
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateStageResponse?: shared.UpdateStageResponse;
}
