package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateBotAliasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasId")
    public String botAliasId;
    public CreateBotAliasResponse withBotAliasId(String botAliasId) {
        this.botAliasId = botAliasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasLocaleSettings")
    public java.util.Map<String, BotAliasLocaleSettings> botAliasLocaleSettings;
    public CreateBotAliasResponse withBotAliasLocaleSettings(java.util.Map<String, BotAliasLocaleSettings> botAliasLocaleSettings) {
        this.botAliasLocaleSettings = botAliasLocaleSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasName")
    public String botAliasName;
    public CreateBotAliasResponse withBotAliasName(String botAliasName) {
        this.botAliasName = botAliasName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasStatus")
    public BotAliasStatusEnum botAliasStatus;
    public CreateBotAliasResponse withBotAliasStatus(BotAliasStatusEnum botAliasStatus) {
        this.botAliasStatus = botAliasStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public CreateBotAliasResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public CreateBotAliasResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationLogSettings")
    public ConversationLogSettings conversationLogSettings;
    public CreateBotAliasResponse withConversationLogSettings(ConversationLogSettings conversationLogSettings) {
        this.conversationLogSettings = conversationLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public CreateBotAliasResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateBotAliasResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentAnalysisSettings")
    public SentimentAnalysisSettings sentimentAnalysisSettings;
    public CreateBotAliasResponse withSentimentAnalysisSettings(SentimentAnalysisSettings sentimentAnalysisSettings) {
        this.sentimentAnalysisSettings = sentimentAnalysisSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateBotAliasResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}