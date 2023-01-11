package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBotsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botSummaries")
    public BotSummary[] botSummaries;
    public ListBotsResponse withBotSummaries(BotSummary[] botSummaries) {
        this.botSummaries = botSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBotsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}