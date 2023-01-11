package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BotVersionLocaleDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceBotVersion")
    public String sourceBotVersion;
    public BotVersionLocaleDetails withSourceBotVersion(String sourceBotVersion) {
        this.sourceBotVersion = sourceBotVersion;
        return this;
    }
}