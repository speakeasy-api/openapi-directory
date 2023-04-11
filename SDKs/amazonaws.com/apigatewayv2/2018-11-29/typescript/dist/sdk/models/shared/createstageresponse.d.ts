import { SpeakeasyBase } from "../../../internal/utils";
import { RouteSettings } from "./routesettings";
/**
 * Settings for logging access in this stage.
 */
export declare class CreateStageResponseAccessLogSettings extends SpeakeasyBase {
    destinationArn?: string;
    format?: string;
}
/**
 * Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
 */
export declare enum CreateStageResponseDefaultRouteSettingsLoggingLevelEnum {
    Error = "ERROR",
    Info = "INFO",
    Off = "OFF"
}
/**
 * Default route settings for the stage.
 */
export declare class CreateStageResponseDefaultRouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: boolean;
    detailedMetricsEnabled?: boolean;
    loggingLevel?: CreateStageResponseDefaultRouteSettingsLoggingLevelEnum;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
}
/**
 * Success
 */
export declare class CreateStageResponse extends SpeakeasyBase {
    accessLogSettings?: CreateStageResponseAccessLogSettings;
    apiGatewayManaged?: boolean;
    autoDeploy?: boolean;
    clientCertificateId?: string;
    createdDate?: Date;
    defaultRouteSettings?: CreateStageResponseDefaultRouteSettings;
    deploymentId?: string;
    description?: string;
    lastDeploymentStatusMessage?: string;
    lastUpdatedDate?: Date;
    routeSettings?: Record<string, RouteSettings>;
    stageName?: string;
    stageVariables?: Record<string, string>;
    tags?: Record<string, string>;
}
