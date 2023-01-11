package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDefaultRetentionPolicyRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public GetDefaultRetentionPolicyRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}