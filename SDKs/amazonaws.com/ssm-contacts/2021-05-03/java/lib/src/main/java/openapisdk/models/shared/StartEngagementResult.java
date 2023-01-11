package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartEngagementResult {
    @JsonProperty("EngagementArn")
    public String engagementArn;
    public StartEngagementResult withEngagementArn(String engagementArn) {
        this.engagementArn = engagementArn;
        return this;
    }
}