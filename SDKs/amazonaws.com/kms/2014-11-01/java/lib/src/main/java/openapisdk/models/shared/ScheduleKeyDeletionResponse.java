package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ScheduleKeyDeletionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeletionDate")
    public OffsetDateTime deletionDate;
    public ScheduleKeyDeletionResponse withDeletionDate(OffsetDateTime deletionDate) {
        this.deletionDate = deletionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public ScheduleKeyDeletionResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyState")
    public KeyStateEnum keyState;
    public ScheduleKeyDeletionResponse withKeyState(KeyStateEnum keyState) {
        this.keyState = keyState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingWindowInDays")
    public Long pendingWindowInDays;
    public ScheduleKeyDeletionResponse withPendingWindowInDays(Long pendingWindowInDays) {
        this.pendingWindowInDays = pendingWindowInDays;
        return this;
    }
}