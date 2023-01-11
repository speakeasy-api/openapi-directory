package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TargetTrackingConfiguration
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a>GameServerGroupAutoScalingPolicy</a>. These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p>
**/
public class TargetTrackingConfiguration {
    @JsonProperty("TargetValue")
    public Double targetValue;
    public TargetTrackingConfiguration withTargetValue(Double targetValue) {
        this.targetValue = targetValue;
        return this;
    }
}