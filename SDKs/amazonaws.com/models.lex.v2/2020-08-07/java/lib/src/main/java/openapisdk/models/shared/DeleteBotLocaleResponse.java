package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBotLocaleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public DeleteBotLocaleResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleStatus")
    public BotLocaleStatusEnum botLocaleStatus;
    public DeleteBotLocaleResponse withBotLocaleStatus(BotLocaleStatusEnum botLocaleStatus) {
        this.botLocaleStatus = botLocaleStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public DeleteBotLocaleResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public DeleteBotLocaleResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
}