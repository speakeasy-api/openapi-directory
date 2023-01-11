package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBotAliasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botAliasSummaries")
    public BotAliasSummary[] botAliasSummaries;
    public ListBotAliasesResponse withBotAliasSummaries(BotAliasSummary[] botAliasSummaries) {
        this.botAliasSummaries = botAliasSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public ListBotAliasesResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBotAliasesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}