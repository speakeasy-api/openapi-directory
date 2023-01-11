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
 * TransitionState
 * Represents information about the state of transitions between one stage and another stage.
**/
public class TransitionState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledReason")
    public String disabledReason;
    public TransitionState withDisabledReason(String disabledReason) {
        this.disabledReason = disabledReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public TransitionState withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastChangedAt")
    public OffsetDateTime lastChangedAt;
    public TransitionState withLastChangedAt(OffsetDateTime lastChangedAt) {
        this.lastChangedAt = lastChangedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastChangedBy")
    public String lastChangedBy;
    public TransitionState withLastChangedBy(String lastChangedBy) {
        this.lastChangedBy = lastChangedBy;
        return this;
    }
}