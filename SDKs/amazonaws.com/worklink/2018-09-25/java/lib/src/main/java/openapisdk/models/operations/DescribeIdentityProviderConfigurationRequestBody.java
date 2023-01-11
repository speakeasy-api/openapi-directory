package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeIdentityProviderConfigurationRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeIdentityProviderConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}