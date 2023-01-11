package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationAggregationSource
 * This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
**/
public class OrganizationAggregationSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllAwsRegions")
    public Boolean allAwsRegions;
    public OrganizationAggregationSource withAllAwsRegions(Boolean allAwsRegions) {
        this.allAwsRegions = allAwsRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegions")
    public String[] awsRegions;
    public OrganizationAggregationSource withAwsRegions(String[] awsRegions) {
        this.awsRegions = awsRegions;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public OrganizationAggregationSource withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}