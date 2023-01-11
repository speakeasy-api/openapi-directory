package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrganizationConfigRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationConfigRuleArn")
    public String organizationConfigRuleArn;
    public PutOrganizationConfigRuleResponse withOrganizationConfigRuleArn(String organizationConfigRuleArn) {
        this.organizationConfigRuleArn = organizationConfigRuleArn;
        return this;
    }
}