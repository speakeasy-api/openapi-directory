package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMailboxDetailsRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public GetMailboxDetailsRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public GetMailboxDetailsRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}