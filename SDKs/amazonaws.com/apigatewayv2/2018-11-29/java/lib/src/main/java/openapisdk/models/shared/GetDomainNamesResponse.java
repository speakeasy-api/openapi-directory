package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDomainNamesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public java.util.Map<String, Object> items;
    public GetDomainNamesResponse withItems(java.util.Map<String, Object> items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public java.util.Map<String, Object> nextToken;
    public GetDomainNamesResponse withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}