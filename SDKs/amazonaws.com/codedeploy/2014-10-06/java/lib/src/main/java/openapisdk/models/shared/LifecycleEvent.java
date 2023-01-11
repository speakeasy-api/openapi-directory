package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LifecycleEvent
 * Information about a deployment lifecycle event.
**/
public class LifecycleEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diagnostics")
    public Diagnostics diagnostics;
    public LifecycleEvent withDiagnostics(Diagnostics diagnostics) {
        this.diagnostics = diagnostics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public LifecycleEvent withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleEventName")
    public String lifecycleEventName;
    public LifecycleEvent withLifecycleEventName(String lifecycleEventName) {
        this.lifecycleEventName = lifecycleEventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public LifecycleEvent withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public LifecycleEventStatusEnum status;
    public LifecycleEvent withStatus(LifecycleEventStatusEnum status) {
        this.status = status;
        return this;
    }
}