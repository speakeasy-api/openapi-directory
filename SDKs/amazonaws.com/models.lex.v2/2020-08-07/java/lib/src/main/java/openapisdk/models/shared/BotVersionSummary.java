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
 * BotVersionSummary
 * Summary information about a bot version returned by the <a>ListBotVersions</a> operation.
**/
public class BotVersionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botName")
    public String botName;
    public BotVersionSummary withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botStatus")
    public BotStatusEnum botStatus;
    public BotVersionSummary withBotStatus(BotStatusEnum botStatus) {
        this.botStatus = botStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public BotVersionSummary withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public BotVersionSummary withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BotVersionSummary withDescription(String description) {
        this.description = description;
        return this;
    }
}