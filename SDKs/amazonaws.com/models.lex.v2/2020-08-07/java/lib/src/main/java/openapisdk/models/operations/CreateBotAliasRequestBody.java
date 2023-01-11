package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBotAliasRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasLocaleSettings")
    public java.util.Map<String, openapisdk.models.shared.BotAliasLocaleSettings> botAliasLocaleSettings;
    public CreateBotAliasRequestBody withBotAliasLocaleSettings(java.util.Map<String, openapisdk.models.shared.BotAliasLocaleSettings> botAliasLocaleSettings) {
        this.botAliasLocaleSettings = botAliasLocaleSettings;
        return this;
    }
    @JsonProperty("botAliasName")
    public String botAliasName;
    public CreateBotAliasRequestBody withBotAliasName(String botAliasName) {
        this.botAliasName = botAliasName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public CreateBotAliasRequestBody withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationLogSettings")
    public CreateBotAliasRequestBodyConversationLogSettings conversationLogSettings;
    public CreateBotAliasRequestBody withConversationLogSettings(CreateBotAliasRequestBodyConversationLogSettings conversationLogSettings) {
        this.conversationLogSettings = conversationLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateBotAliasRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentAnalysisSettings")
    public CreateBotAliasRequestBodySentimentAnalysisSettings sentimentAnalysisSettings;
    public CreateBotAliasRequestBody withSentimentAnalysisSettings(CreateBotAliasRequestBodySentimentAnalysisSettings sentimentAnalysisSettings) {
        this.sentimentAnalysisSettings = sentimentAnalysisSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateBotAliasRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}