package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBotAliasRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasLocaleSettings")
    public java.util.Map<String, openapisdk.models.shared.BotAliasLocaleSettings> botAliasLocaleSettings;
    public UpdateBotAliasRequestBody withBotAliasLocaleSettings(java.util.Map<String, openapisdk.models.shared.BotAliasLocaleSettings> botAliasLocaleSettings) {
        this.botAliasLocaleSettings = botAliasLocaleSettings;
        return this;
    }
    @JsonProperty("botAliasName")
    public String botAliasName;
    public UpdateBotAliasRequestBody withBotAliasName(String botAliasName) {
        this.botAliasName = botAliasName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public UpdateBotAliasRequestBody withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationLogSettings")
    public UpdateBotAliasRequestBodyConversationLogSettings conversationLogSettings;
    public UpdateBotAliasRequestBody withConversationLogSettings(UpdateBotAliasRequestBodyConversationLogSettings conversationLogSettings) {
        this.conversationLogSettings = conversationLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateBotAliasRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentAnalysisSettings")
    public UpdateBotAliasRequestBodySentimentAnalysisSettings sentimentAnalysisSettings;
    public UpdateBotAliasRequestBody withSentimentAnalysisSettings(UpdateBotAliasRequestBodySentimentAnalysisSettings sentimentAnalysisSettings) {
        this.sentimentAnalysisSettings = sentimentAnalysisSettings;
        return this;
    }
}