package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectionAliasesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionAliases")
    public ConnectionAlias[] connectionAliases;
    public DescribeConnectionAliasesResult withConnectionAliases(ConnectionAlias[] connectionAliases) {
        this.connectionAliases = connectionAliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConnectionAliasesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}