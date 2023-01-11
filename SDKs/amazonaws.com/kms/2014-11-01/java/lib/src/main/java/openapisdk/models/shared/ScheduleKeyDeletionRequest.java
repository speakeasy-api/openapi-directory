package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleKeyDeletionRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public ScheduleKeyDeletionRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingWindowInDays")
    public Long pendingWindowInDays;
    public ScheduleKeyDeletionRequest withPendingWindowInDays(Long pendingWindowInDays) {
        this.pendingWindowInDays = pendingWindowInDays;
        return this;
    }
}