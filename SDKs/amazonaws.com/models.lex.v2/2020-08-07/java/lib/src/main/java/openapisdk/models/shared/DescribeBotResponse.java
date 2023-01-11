package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeBotResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public DescribeBotResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botName")
    public String botName;
    public DescribeBotResponse withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botStatus")
    public BotStatusEnum botStatus;
    public DescribeBotResponse withBotStatus(BotStatusEnum botStatus) {
        this.botStatus = botStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public DescribeBotResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataPrivacy")
    public DataPrivacy dataPrivacy;
    public DescribeBotResponse withDataPrivacy(DataPrivacy dataPrivacy) {
        this.dataPrivacy = dataPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DescribeBotResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleSessionTTLInSeconds")
    public Long idleSessionTTLInSeconds;
    public DescribeBotResponse withIdleSessionTtlInSeconds(Long idleSessionTTLInSeconds) {
        this.idleSessionTTLInSeconds = idleSessionTTLInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public DescribeBotResponse withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public DescribeBotResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}