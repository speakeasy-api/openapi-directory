package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEngagementRequest {
    @JsonProperty("EngagementId")
    public String engagementId;
    public DescribeEngagementRequest withEngagementId(String engagementId) {
        this.engagementId = engagementId;
        return this;
    }
}