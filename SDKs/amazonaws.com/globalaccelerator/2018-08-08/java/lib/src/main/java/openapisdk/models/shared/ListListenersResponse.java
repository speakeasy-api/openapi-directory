package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListListenersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Listeners")
    public Listener[] listeners;
    public ListListenersResponse withListeners(Listener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListListenersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}