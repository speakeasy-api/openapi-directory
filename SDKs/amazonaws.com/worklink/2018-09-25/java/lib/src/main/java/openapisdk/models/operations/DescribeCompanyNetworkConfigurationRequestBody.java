package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCompanyNetworkConfigurationRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeCompanyNetworkConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}