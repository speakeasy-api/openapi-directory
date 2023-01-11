package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAccessControlEffectRequest {
    @JsonProperty("Action")
    public String action;
    public GetAccessControlEffectRequest withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonProperty("IpAddress")
    public String ipAddress;
    public GetAccessControlEffectRequest withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public GetAccessControlEffectRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public GetAccessControlEffectRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}