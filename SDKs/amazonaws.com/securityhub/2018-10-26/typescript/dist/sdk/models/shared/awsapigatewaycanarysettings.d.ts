import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about settings for canary deployment in the stage.
 */
export declare class AwsApiGatewayCanarySettings extends SpeakeasyBase {
    deploymentId?: string;
    percentTraffic?: number;
    stageVariableOverrides?: Record<string, string>;
    useStageCache?: boolean;
}
