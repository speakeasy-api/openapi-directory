package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeBotLocaleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public DescribeBotLocaleResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleHistoryEvents")
    public BotLocaleHistoryEvent[] botLocaleHistoryEvents;
    public DescribeBotLocaleResponse withBotLocaleHistoryEvents(BotLocaleHistoryEvent[] botLocaleHistoryEvents) {
        this.botLocaleHistoryEvents = botLocaleHistoryEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleStatus")
    public BotLocaleStatusEnum botLocaleStatus;
    public DescribeBotLocaleResponse withBotLocaleStatus(BotLocaleStatusEnum botLocaleStatus) {
        this.botLocaleStatus = botLocaleStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public DescribeBotLocaleResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public DescribeBotLocaleResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DescribeBotLocaleResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReasons")
    public String[] failureReasons;
    public DescribeBotLocaleResponse withFailureReasons(String[] failureReasons) {
        this.failureReasons = failureReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentsCount")
    public Long intentsCount;
    public DescribeBotLocaleResponse withIntentsCount(Long intentsCount) {
        this.intentsCount = intentsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastBuildSubmittedDateTime")
    public OffsetDateTime lastBuildSubmittedDateTime;
    public DescribeBotLocaleResponse withLastBuildSubmittedDateTime(OffsetDateTime lastBuildSubmittedDateTime) {
        this.lastBuildSubmittedDateTime = lastBuildSubmittedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public DescribeBotLocaleResponse withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public DescribeBotLocaleResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeName")
    public String localeName;
    public DescribeBotLocaleResponse withLocaleName(String localeName) {
        this.localeName = localeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nluIntentConfidenceThreshold")
    public Double nluIntentConfidenceThreshold;
    public DescribeBotLocaleResponse withNluIntentConfidenceThreshold(Double nluIntentConfidenceThreshold) {
        this.nluIntentConfidenceThreshold = nluIntentConfidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypesCount")
    public Long slotTypesCount;
    public DescribeBotLocaleResponse withSlotTypesCount(Long slotTypesCount) {
        this.slotTypesCount = slotTypesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceSettings")
    public VoiceSettings voiceSettings;
    public DescribeBotLocaleResponse withVoiceSettings(VoiceSettings voiceSettings) {
        this.voiceSettings = voiceSettings;
        return this;
    }
}