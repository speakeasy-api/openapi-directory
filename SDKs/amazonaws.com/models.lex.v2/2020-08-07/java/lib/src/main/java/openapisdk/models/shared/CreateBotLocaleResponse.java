package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateBotLocaleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public CreateBotLocaleResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleStatus")
    public BotLocaleStatusEnum botLocaleStatus;
    public CreateBotLocaleResponse withBotLocaleStatus(BotLocaleStatusEnum botLocaleStatus) {
        this.botLocaleStatus = botLocaleStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public CreateBotLocaleResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public CreateBotLocaleResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateBotLocaleResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public CreateBotLocaleResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeName")
    public String localeName;
    public CreateBotLocaleResponse withLocaleName(String localeName) {
        this.localeName = localeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nluIntentConfidenceThreshold")
    public Double nluIntentConfidenceThreshold;
    public CreateBotLocaleResponse withNluIntentConfidenceThreshold(Double nluIntentConfidenceThreshold) {
        this.nluIntentConfidenceThreshold = nluIntentConfidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceSettings")
    public VoiceSettings voiceSettings;
    public CreateBotLocaleResponse withVoiceSettings(VoiceSettings voiceSettings) {
        this.voiceSettings = voiceSettings;
        return this;
    }
}