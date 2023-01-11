package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConfigurationSetsResponse
 * A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.
**/
public class ListConfigurationSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSets")
    public String[] configurationSets;
    public ListConfigurationSetsResponse withConfigurationSets(String[] configurationSets) {
        this.configurationSets = configurationSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListConfigurationSetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}