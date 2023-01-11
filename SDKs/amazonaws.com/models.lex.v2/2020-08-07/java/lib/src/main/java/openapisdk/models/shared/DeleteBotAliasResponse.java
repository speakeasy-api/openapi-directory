package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBotAliasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasId")
    public String botAliasId;
    public DeleteBotAliasResponse withBotAliasId(String botAliasId) {
        this.botAliasId = botAliasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasStatus")
    public BotAliasStatusEnum botAliasStatus;
    public DeleteBotAliasResponse withBotAliasStatus(BotAliasStatusEnum botAliasStatus) {
        this.botAliasStatus = botAliasStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public DeleteBotAliasResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
}