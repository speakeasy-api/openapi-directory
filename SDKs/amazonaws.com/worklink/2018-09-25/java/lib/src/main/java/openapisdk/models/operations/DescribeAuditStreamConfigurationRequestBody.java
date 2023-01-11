package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAuditStreamConfigurationRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeAuditStreamConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}