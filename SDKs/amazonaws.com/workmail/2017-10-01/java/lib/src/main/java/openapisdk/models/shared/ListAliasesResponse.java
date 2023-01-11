package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAliasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Aliases")
    public String[] aliases;
    public ListAliasesResponse withAliases(String[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAliasesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}