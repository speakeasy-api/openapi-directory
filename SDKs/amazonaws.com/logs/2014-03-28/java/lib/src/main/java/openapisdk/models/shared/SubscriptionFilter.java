package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionFilter
 * Represents a subscription filter.
**/
public class SubscriptionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Long creationTime;
    public SubscriptionFilter withCreationTime(Long creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationArn")
    public String destinationArn;
    public SubscriptionFilter withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public DistributionEnum distribution;
    public SubscriptionFilter withDistribution(DistributionEnum distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterName")
    public String filterName;
    public SubscriptionFilter withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterPattern")
    public String filterPattern;
    public SubscriptionFilter withFilterPattern(String filterPattern) {
        this.filterPattern = filterPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupName")
    public String logGroupName;
    public SubscriptionFilter withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public SubscriptionFilter withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}