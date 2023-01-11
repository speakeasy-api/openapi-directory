package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UndeprecateActivityTypeInput {
    @JsonProperty("activityType")
    public ActivityType activityType;
    public UndeprecateActivityTypeInput withActivityType(ActivityType activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public UndeprecateActivityTypeInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}