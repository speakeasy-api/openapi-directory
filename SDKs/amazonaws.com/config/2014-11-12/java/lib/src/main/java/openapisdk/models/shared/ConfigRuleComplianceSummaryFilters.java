package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigRuleComplianceSummaryFilters
 * Filters the results based on the account IDs and regions.
**/
public class ConfigRuleComplianceSummaryFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public ConfigRuleComplianceSummaryFilters withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public ConfigRuleComplianceSummaryFilters withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
}