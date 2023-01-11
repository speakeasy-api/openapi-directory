package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeActivityTypeInput {
    @JsonProperty("activityType")
    public ActivityType activityType;
    public DescribeActivityTypeInput withActivityType(ActivityType activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public DescribeActivityTypeInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}