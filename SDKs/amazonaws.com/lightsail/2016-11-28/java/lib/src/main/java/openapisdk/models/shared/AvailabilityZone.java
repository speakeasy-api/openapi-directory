package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AvailabilityZone
 * Describes an Availability Zone.
**/
public class AvailabilityZone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public AvailabilityZone withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoneName")
    public String zoneName;
    public AvailabilityZone withZoneName(String zoneName) {
        this.zoneName = zoneName;
        return this;
    }
}