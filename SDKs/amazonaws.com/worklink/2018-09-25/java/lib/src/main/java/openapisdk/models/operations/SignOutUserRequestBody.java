package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SignOutUserRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public SignOutUserRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public SignOutUserRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}