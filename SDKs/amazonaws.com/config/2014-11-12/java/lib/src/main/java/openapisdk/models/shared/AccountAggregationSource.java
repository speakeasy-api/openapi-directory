package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountAggregationSource
 * A collection of accounts and regions.
**/
public class AccountAggregationSource {
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public AccountAggregationSource withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllAwsRegions")
    public Boolean allAwsRegions;
    public AccountAggregationSource withAllAwsRegions(Boolean allAwsRegions) {
        this.allAwsRegions = allAwsRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegions")
    public String[] awsRegions;
    public AccountAggregationSource withAwsRegions(String[] awsRegions) {
        this.awsRegions = awsRegions;
        return this;
    }
}