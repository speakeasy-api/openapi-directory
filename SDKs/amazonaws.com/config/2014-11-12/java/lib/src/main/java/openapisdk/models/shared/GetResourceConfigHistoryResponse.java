package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetResourceConfigHistoryResponse
 * The output for the <a>GetResourceConfigHistory</a> action.
**/
public class GetResourceConfigHistoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationItems")
    public ConfigurationItem[] configurationItems;
    public GetResourceConfigHistoryResponse withConfigurationItems(ConfigurationItem[] configurationItems) {
        this.configurationItems = configurationItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourceConfigHistoryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}