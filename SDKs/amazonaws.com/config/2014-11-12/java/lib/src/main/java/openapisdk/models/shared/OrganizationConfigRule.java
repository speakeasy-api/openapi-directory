package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * OrganizationConfigRule
 * An organization config rule that has information about config rules that Config creates in member accounts.
**/
public class OrganizationConfigRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludedAccounts")
    public String[] excludedAccounts;
    public OrganizationConfigRule withExcludedAccounts(String[] excludedAccounts) {
        this.excludedAccounts = excludedAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public OrganizationConfigRule withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonProperty("OrganizationConfigRuleArn")
    public String organizationConfigRuleArn;
    public OrganizationConfigRule withOrganizationConfigRuleArn(String organizationConfigRuleArn) {
        this.organizationConfigRuleArn = organizationConfigRuleArn;
        return this;
    }
    @JsonProperty("OrganizationConfigRuleName")
    public String organizationConfigRuleName;
    public OrganizationConfigRule withOrganizationConfigRuleName(String organizationConfigRuleName) {
        this.organizationConfigRuleName = organizationConfigRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationCustomRuleMetadata")
    public OrganizationCustomRuleMetadata organizationCustomRuleMetadata;
    public OrganizationConfigRule withOrganizationCustomRuleMetadata(OrganizationCustomRuleMetadata organizationCustomRuleMetadata) {
        this.organizationCustomRuleMetadata = organizationCustomRuleMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationManagedRuleMetadata")
    public OrganizationManagedRuleMetadata organizationManagedRuleMetadata;
    public OrganizationConfigRule withOrganizationManagedRuleMetadata(OrganizationManagedRuleMetadata organizationManagedRuleMetadata) {
        this.organizationManagedRuleMetadata = organizationManagedRuleMetadata;
        return this;
    }
}