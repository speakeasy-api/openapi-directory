package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomPluginsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPlugins")
    public CustomPluginSummary[] customPlugins;
    public ListCustomPluginsResponse withCustomPlugins(CustomPluginSummary[] customPlugins) {
        this.customPlugins = customPlugins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListCustomPluginsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}