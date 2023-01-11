package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePortalResponse {
    @JsonProperty("portalStatus")
    public PortalStatus portalStatus;
    public UpdatePortalResponse withPortalStatus(PortalStatus portalStatus) {
        this.portalStatus = portalStatus;
        return this;
    }
}