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
 * BotLocaleSummary
 * Summary information about bot locales returned by the <a>ListBotLocales</a> operation.
**/
public class BotLocaleSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleStatus")
    public BotLocaleStatusEnum botLocaleStatus;
    public BotLocaleSummary withBotLocaleStatus(BotLocaleStatusEnum botLocaleStatus) {
        this.botLocaleStatus = botLocaleStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BotLocaleSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastBuildSubmittedDateTime")
    public OffsetDateTime lastBuildSubmittedDateTime;
    public BotLocaleSummary withLastBuildSubmittedDateTime(OffsetDateTime lastBuildSubmittedDateTime) {
        this.lastBuildSubmittedDateTime = lastBuildSubmittedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public BotLocaleSummary withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public BotLocaleSummary withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeName")
    public String localeName;
    public BotLocaleSummary withLocaleName(String localeName) {
        this.localeName = localeName;
        return this;
    }
}