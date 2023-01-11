package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDevicePolicyConfigurationRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeDevicePolicyConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}