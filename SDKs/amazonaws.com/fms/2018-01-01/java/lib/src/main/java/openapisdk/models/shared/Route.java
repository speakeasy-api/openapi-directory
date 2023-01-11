package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Route
 * Describes a route in a route table.
**/
public class Route {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Destination")
    public String destination;
    public Route withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationType")
    public DestinationTypeEnum destinationType;
    public Route withDestinationType(DestinationTypeEnum destinationType) {
        this.destinationType = destinationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public String target;
    public Route withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetType")
    public TargetTypeEnum targetType;
    public Route withTargetType(TargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
}