package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceDefinition
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a <a>GameServerGroup</a>. All game server groups must have at least two instance types defined for it. GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p>
**/
public class InstanceDefinition {
    @JsonProperty("InstanceType")
    public GameServerGroupInstanceTypeEnum instanceType;
    public InstanceDefinition withInstanceType(GameServerGroupInstanceTypeEnum instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WeightedCapacity")
    public String weightedCapacity;
    public InstanceDefinition withWeightedCapacity(String weightedCapacity) {
        this.weightedCapacity = weightedCapacity;
        return this;
    }
}