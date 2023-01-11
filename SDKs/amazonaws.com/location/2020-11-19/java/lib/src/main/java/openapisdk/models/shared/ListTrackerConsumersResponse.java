package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrackerConsumersResponse {
    @JsonProperty("ConsumerArns")
    public String[] consumerArns;
    public ListTrackerConsumersResponse withConsumerArns(String[] consumerArns) {
        this.consumerArns = consumerArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTrackerConsumersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}