package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStreamConsumersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Consumers")
    public Consumer[] consumers;
    public ListStreamConsumersOutput withConsumers(Consumer[] consumers) {
        this.consumers = consumers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListStreamConsumersOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}