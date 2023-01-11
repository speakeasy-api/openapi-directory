package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListV2LoggingLevelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logTargetConfigurations")
    public LogTargetConfiguration[] logTargetConfigurations;
    public ListV2LoggingLevelsResponse withLogTargetConfigurations(LogTargetConfiguration[] logTargetConfigurations) {
        this.logTargetConfigurations = logTargetConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListV2LoggingLevelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}