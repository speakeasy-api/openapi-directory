package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionFilterRequest {
    @JsonProperty("destinationArn")
    public String destinationArn;
    public PutSubscriptionFilterRequest withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public DistributionEnum distribution;
    public PutSubscriptionFilterRequest withDistribution(DistributionEnum distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonProperty("filterName")
    public String filterName;
    public PutSubscriptionFilterRequest withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @JsonProperty("filterPattern")
    public String filterPattern;
    public PutSubscriptionFilterRequest withFilterPattern(String filterPattern) {
        this.filterPattern = filterPattern;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public PutSubscriptionFilterRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public PutSubscriptionFilterRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}