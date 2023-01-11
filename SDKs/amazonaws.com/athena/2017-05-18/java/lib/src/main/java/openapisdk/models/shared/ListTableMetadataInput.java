package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTableMetadataInput {
    @JsonProperty("CatalogName")
    public String catalogName;
    public ListTableMetadataInput withCatalogName(String catalogName) {
        this.catalogName = catalogName;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public ListTableMetadataInput withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expression")
    public String expression;
    public ListTableMetadataInput withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListTableMetadataInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTableMetadataInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}