package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomRoutingListenersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Listeners")
    public CustomRoutingListener[] listeners;
    public ListCustomRoutingListenersResponse withListeners(CustomRoutingListener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCustomRoutingListenersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}