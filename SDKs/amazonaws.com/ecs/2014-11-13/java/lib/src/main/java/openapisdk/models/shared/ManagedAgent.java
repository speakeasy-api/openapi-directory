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
 * ManagedAgent
 * Details about the managed agent status for the container.
**/
public class ManagedAgent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStartedAt")
    public OffsetDateTime lastStartedAt;
    public ManagedAgent withLastStartedAt(OffsetDateTime lastStartedAt) {
        this.lastStartedAt = lastStartedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStatus")
    public String lastStatus;
    public ManagedAgent withLastStatus(String lastStatus) {
        this.lastStatus = lastStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ManagedAgentNameEnum name;
    public ManagedAgent withName(ManagedAgentNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ManagedAgent withReason(String reason) {
        this.reason = reason;
        return this;
    }
}