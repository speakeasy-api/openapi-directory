package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourceDelegatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Delegates")
    public Delegate[] delegates;
    public ListResourceDelegatesResponse withDelegates(Delegate[] delegates) {
        this.delegates = delegates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResourceDelegatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}