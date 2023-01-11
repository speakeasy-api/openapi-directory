package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatabasesInput {
    @JsonProperty("CatalogName")
    public String catalogName;
    public ListDatabasesInput withCatalogName(String catalogName) {
        this.catalogName = catalogName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListDatabasesInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDatabasesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}