package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConfigurationHistoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventList")
    public ConfigurationEvent[] eventList;
    public ListConfigurationHistoryResponse withEventList(ConfigurationEvent[] eventList) {
        this.eventList = eventList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListConfigurationHistoryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}