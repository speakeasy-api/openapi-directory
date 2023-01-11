package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociatedStacksResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Names")
    public String[] names;
    public ListAssociatedStacksResult withNames(String[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAssociatedStacksResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}