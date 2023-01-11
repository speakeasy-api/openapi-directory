package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBotVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public DeleteBotVersionResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botStatus")
    public BotStatusEnum botStatus;
    public DeleteBotVersionResponse withBotStatus(BotStatusEnum botStatus) {
        this.botStatus = botStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public DeleteBotVersionResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
}