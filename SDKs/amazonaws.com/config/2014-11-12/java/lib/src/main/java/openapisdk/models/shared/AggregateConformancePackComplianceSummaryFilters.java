package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateConformancePackComplianceSummaryFilters
 * Filters the results based on account ID and region. 
**/
public class AggregateConformancePackComplianceSummaryFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AggregateConformancePackComplianceSummaryFilters withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public AggregateConformancePackComplianceSummaryFilters withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
}