package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionOriginGroup
 * Information about an origin group for the distribution.
**/
public class AwsCloudFrontDistributionOriginGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailoverCriteria")
    public AwsCloudFrontDistributionOriginGroupFailover failoverCriteria;
    public AwsCloudFrontDistributionOriginGroup withFailoverCriteria(AwsCloudFrontDistributionOriginGroupFailover failoverCriteria) {
        this.failoverCriteria = failoverCriteria;
        return this;
    }
}