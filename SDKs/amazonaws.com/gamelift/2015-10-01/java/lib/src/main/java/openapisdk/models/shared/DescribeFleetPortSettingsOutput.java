package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetPortSettingsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeFleetPortSettingsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeFleetPortSettingsOutput withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeFleetPortSettingsOutput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InboundPermissions")
    public IpPermission[] inboundPermissions;
    public DescribeFleetPortSettingsOutput withInboundPermissions(IpPermission[] inboundPermissions) {
        this.inboundPermissions = inboundPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public DescribeFleetPortSettingsOutput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateStatus")
    public LocationUpdateStatusEnum updateStatus;
    public DescribeFleetPortSettingsOutput withUpdateStatus(LocationUpdateStatusEnum updateStatus) {
        this.updateStatus = updateStatus;
        return this;
    }
}