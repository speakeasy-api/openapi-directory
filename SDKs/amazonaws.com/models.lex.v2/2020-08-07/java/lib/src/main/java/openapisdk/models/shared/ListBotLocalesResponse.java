package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBotLocalesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public ListBotLocalesResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleSummaries")
    public BotLocaleSummary[] botLocaleSummaries;
    public ListBotLocalesResponse withBotLocaleSummaries(BotLocaleSummary[] botLocaleSummaries) {
        this.botLocaleSummaries = botLocaleSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public ListBotLocalesResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBotLocalesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}