package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Session {
    @JsonProperty("constraints")
    public Constraints constraints;
    public Session withConstraints(Constraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("deadline")
    public OffsetDateTime deadline;
    public Session withDeadline(OffsetDateTime deadline) {
        this.deadline = deadline;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public Session withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerContext")
    public PlayerContext playerContext;
    public Session withPlayerContext(PlayerContext playerContext) {
        this.playerContext = playerContext;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("requested")
    public OffsetDateTime requested;
    public Session withRequested(OffsetDateTime requested) {
        this.requested = requested;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public Session withVersion(String version) {
        this.version = version;
        return this;
    }
}