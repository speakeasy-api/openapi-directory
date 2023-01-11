package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateScheduledAuditResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledAuditArn")
    public String scheduledAuditArn;
    public UpdateScheduledAuditResponse withScheduledAuditArn(String scheduledAuditArn) {
        this.scheduledAuditArn = scheduledAuditArn;
        return this;
    }
}