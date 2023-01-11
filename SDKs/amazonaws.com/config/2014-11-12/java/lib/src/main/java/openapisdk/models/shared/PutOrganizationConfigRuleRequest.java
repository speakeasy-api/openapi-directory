package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrganizationConfigRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludedAccounts")
    public String[] excludedAccounts;
    public PutOrganizationConfigRuleRequest withExcludedAccounts(String[] excludedAccounts) {
        this.excludedAccounts = excludedAccounts;
        return this;
    }
    @JsonProperty("OrganizationConfigRuleName")
    public String organizationConfigRuleName;
    public PutOrganizationConfigRuleRequest withOrganizationConfigRuleName(String organizationConfigRuleName) {
        this.organizationConfigRuleName = organizationConfigRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationCustomRuleMetadata")
    public OrganizationCustomRuleMetadata organizationCustomRuleMetadata;
    public PutOrganizationConfigRuleRequest withOrganizationCustomRuleMetadata(OrganizationCustomRuleMetadata organizationCustomRuleMetadata) {
        this.organizationCustomRuleMetadata = organizationCustomRuleMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationManagedRuleMetadata")
    public OrganizationManagedRuleMetadata organizationManagedRuleMetadata;
    public PutOrganizationConfigRuleRequest withOrganizationManagedRuleMetadata(OrganizationManagedRuleMetadata organizationManagedRuleMetadata) {
        this.organizationManagedRuleMetadata = organizationManagedRuleMetadata;
        return this;
    }
}