package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetPortSettingsInput
 * Represents the input for a request operation.
**/
public class DescribeFleetPortSettingsInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeFleetPortSettingsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public DescribeFleetPortSettingsInput withLocation(String location) {
        this.location = location;
        return this;
    }
}