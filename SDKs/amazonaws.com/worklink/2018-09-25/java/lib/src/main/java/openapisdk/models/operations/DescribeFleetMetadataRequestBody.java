package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFleetMetadataRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeFleetMetadataRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}