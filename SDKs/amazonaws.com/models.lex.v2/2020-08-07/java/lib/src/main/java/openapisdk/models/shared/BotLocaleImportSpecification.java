package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BotLocaleImportSpecification
 * Provides the bot locale parameters required for importing a bot locale.
**/
public class BotLocaleImportSpecification {
    @JsonProperty("botId")
    public String botId;
    public BotLocaleImportSpecification withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonProperty("botVersion")
    public String botVersion;
    public BotLocaleImportSpecification withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonProperty("localeId")
    public String localeId;
    public BotLocaleImportSpecification withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nluIntentConfidenceThreshold")
    public Double nluIntentConfidenceThreshold;
    public BotLocaleImportSpecification withNluIntentConfidenceThreshold(Double nluIntentConfidenceThreshold) {
        this.nluIntentConfidenceThreshold = nluIntentConfidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceSettings")
    public VoiceSettings voiceSettings;
    public BotLocaleImportSpecification withVoiceSettings(VoiceSettings voiceSettings) {
        this.voiceSettings = voiceSettings;
        return this;
    }
}