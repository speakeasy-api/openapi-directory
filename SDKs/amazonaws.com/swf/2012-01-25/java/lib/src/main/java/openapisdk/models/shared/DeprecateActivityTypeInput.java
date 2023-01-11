package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeprecateActivityTypeInput {
    @JsonProperty("activityType")
    public ActivityType activityType;
    public DeprecateActivityTypeInput withActivityType(ActivityType activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public DeprecateActivityTypeInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}