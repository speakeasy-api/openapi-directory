import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p>
 */
export declare class GameServerGroupAutoScalingPolicy extends SpeakeasyBase {
    estimatedInstanceWarmup?: number;
    targetTrackingConfiguration: TargetTrackingConfiguration;
}
