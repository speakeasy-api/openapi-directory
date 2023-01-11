package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AvailabilityZoneDetail
 * A list of Availability Zones corresponding to the segments in a trace.
**/
public class AvailabilityZoneDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AvailabilityZoneDetail withName(String name) {
        this.name = name;
        return this;
    }
}