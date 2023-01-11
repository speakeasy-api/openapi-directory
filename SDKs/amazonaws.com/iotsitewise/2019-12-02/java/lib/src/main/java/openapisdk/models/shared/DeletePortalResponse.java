package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePortalResponse {
    @JsonProperty("portalStatus")
    public PortalStatus portalStatus;
    public DeletePortalResponse withPortalStatus(PortalStatus portalStatus) {
        this.portalStatus = portalStatus;
        return this;
    }
}