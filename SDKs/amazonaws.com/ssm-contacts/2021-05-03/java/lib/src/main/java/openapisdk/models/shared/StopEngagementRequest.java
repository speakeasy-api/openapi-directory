package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopEngagementRequest {
    @JsonProperty("EngagementId")
    public String engagementId;
    public StopEngagementRequest withEngagementId(String engagementId) {
        this.engagementId = engagementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public StopEngagementRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
}