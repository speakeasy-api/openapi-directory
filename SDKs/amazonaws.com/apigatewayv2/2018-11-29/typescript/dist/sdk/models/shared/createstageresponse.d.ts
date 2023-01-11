import { SpeakeasyBase } from "../../../internal/utils";
import { RouteSettings } from "./routesettings";
/**
 * Settings for logging access in this stage.
**/
export declare class CreateStageResponseAccessLogSettings extends SpeakeasyBase {
    destinationArn?: Record<string, any>;
    format?: Record<string, any>;
}
/**
 * Default route settings for the stage.
**/
export declare class CreateStageResponseDefaultRouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: Record<string, any>;
    detailedMetricsEnabled?: Record<string, any>;
    loggingLevel?: Record<string, any>;
    throttlingBurstLimit?: Record<string, any>;
    throttlingRateLimit?: Record<string, any>;
}
export declare class CreateStageResponse extends SpeakeasyBase {
    accessLogSettings?: CreateStageResponseAccessLogSettings;
    apiGatewayManaged?: Record<string, any>;
    autoDeploy?: Record<string, any>;
    clientCertificateId?: Record<string, any>;
    createdDate?: Record<string, any>;
    defaultRouteSettings?: CreateStageResponseDefaultRouteSettings;
    deploymentId?: Record<string, any>;
    description?: Record<string, any>;
    lastDeploymentStatusMessage?: Record<string, any>;
    lastUpdatedDate?: Record<string, any>;
    routeSettings?: Record<string, RouteSettings>;
    stageName?: Record<string, any>;
    stageVariables?: Record<string, string>;
    tags?: Record<string, string>;
}
