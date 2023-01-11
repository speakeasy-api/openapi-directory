package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNamedQueriesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamedQueryIds")
    public String[] namedQueryIds;
    public ListNamedQueriesOutput withNamedQueryIds(String[] namedQueryIds) {
        this.namedQueryIds = namedQueryIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListNamedQueriesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}