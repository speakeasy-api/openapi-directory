import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteSettings } from "./routesettings";



// GetStageResponseAccessLogSettings
/** 
 * Settings for logging access in this stage.
**/
export class GetStageResponseAccessLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: Record<string, any>;
}


// GetStageResponseDefaultRouteSettings
/** 
 * Default route settings for the stage.
**/
export class GetStageResponseDefaultRouteSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: Record<string, any>;
}


export class GetStageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessLogSettings" })
  accessLogSettings?: GetStageResponseAccessLogSettings;

  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AutoDeploy" })
  autoDeploy?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ClientCertificateId" })
  clientCertificateId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DefaultRouteSettings" })
  defaultRouteSettings?: GetStageResponseDefaultRouteSettings;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=LastDeploymentStatusMessage" })
  lastDeploymentStatusMessage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RouteSettings", elemType: RouteSettings })
  routeSettings?: Record<string, RouteSettings>;

  @SpeakeasyMetadata({ data: "json, name=StageName" })
  stageName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=StageVariables" })
  stageVariables?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;
}
