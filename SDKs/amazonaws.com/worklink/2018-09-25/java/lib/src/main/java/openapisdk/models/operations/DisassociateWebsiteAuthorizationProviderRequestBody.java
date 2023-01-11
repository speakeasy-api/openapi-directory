package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateWebsiteAuthorizationProviderRequestBody {
    @JsonProperty("AuthorizationProviderId")
    public String authorizationProviderId;
    public DisassociateWebsiteAuthorizationProviderRequestBody withAuthorizationProviderId(String authorizationProviderId) {
        this.authorizationProviderId = authorizationProviderId;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DisassociateWebsiteAuthorizationProviderRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}