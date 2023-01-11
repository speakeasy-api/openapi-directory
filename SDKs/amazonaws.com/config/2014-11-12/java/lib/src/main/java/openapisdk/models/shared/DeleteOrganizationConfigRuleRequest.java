package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteOrganizationConfigRuleRequest {
    @JsonProperty("OrganizationConfigRuleName")
    public String organizationConfigRuleName;
    public DeleteOrganizationConfigRuleRequest withOrganizationConfigRuleName(String organizationConfigRuleName) {
        this.organizationConfigRuleName = organizationConfigRuleName;
        return this;
    }
}