package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAccessControlRulesRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public ListAccessControlRulesRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}