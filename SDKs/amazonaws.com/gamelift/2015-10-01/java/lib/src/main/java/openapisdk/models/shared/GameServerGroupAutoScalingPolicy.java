package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GameServerGroupAutoScalingPolicy
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group with <a>CreateGameServerGroup</a>. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p>
**/
public class GameServerGroupAutoScalingPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EstimatedInstanceWarmup")
    public Long estimatedInstanceWarmup;
    public GameServerGroupAutoScalingPolicy withEstimatedInstanceWarmup(Long estimatedInstanceWarmup) {
        this.estimatedInstanceWarmup = estimatedInstanceWarmup;
        return this;
    }
    @JsonProperty("TargetTrackingConfiguration")
    public TargetTrackingConfiguration targetTrackingConfiguration;
    public GameServerGroupAutoScalingPolicy withTargetTrackingConfiguration(TargetTrackingConfiguration targetTrackingConfiguration) {
        this.targetTrackingConfiguration = targetTrackingConfiguration;
        return this;
    }
}