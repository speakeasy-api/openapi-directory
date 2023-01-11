package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttemptRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesSynced")
    public Long bytesSynced;
    public AttemptRead withBytesSynced(Long bytesSynced) {
        this.bytesSynced = bytesSynced;
        return this;
    }
    @JsonProperty("createdAt")
    public Long createdAt;
    public AttemptRead withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endedAt")
    public Long endedAt;
    public AttemptRead withEndedAt(Long endedAt) {
        this.endedAt = endedAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public AttemptRead withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordsSynced")
    public Long recordsSynced;
    public AttemptRead withRecordsSynced(Long recordsSynced) {
        this.recordsSynced = recordsSynced;
        return this;
    }
    @JsonProperty("status")
    public AttemptStatusEnum status;
    public AttemptRead withStatus(AttemptStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("updatedAt")
    public Long updatedAt;
    public AttemptRead withUpdatedAt(Long updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}