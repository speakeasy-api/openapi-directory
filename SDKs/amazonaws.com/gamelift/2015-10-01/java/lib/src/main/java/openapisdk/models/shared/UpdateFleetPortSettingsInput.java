package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFleetPortSettingsInput
 * Represents the input for a request operation.
**/
public class UpdateFleetPortSettingsInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public UpdateFleetPortSettingsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InboundPermissionAuthorizations")
    public IpPermission[] inboundPermissionAuthorizations;
    public UpdateFleetPortSettingsInput withInboundPermissionAuthorizations(IpPermission[] inboundPermissionAuthorizations) {
        this.inboundPermissionAuthorizations = inboundPermissionAuthorizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InboundPermissionRevocations")
    public IpPermission[] inboundPermissionRevocations;
    public UpdateFleetPortSettingsInput withInboundPermissionRevocations(IpPermission[] inboundPermissionRevocations) {
        this.inboundPermissionRevocations = inboundPermissionRevocations;
        return this;
    }
}