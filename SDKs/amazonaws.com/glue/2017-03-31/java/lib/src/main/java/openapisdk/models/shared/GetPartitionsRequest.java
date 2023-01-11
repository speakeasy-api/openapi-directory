package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPartitionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetPartitionsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GetPartitionsRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludeColumnSchema")
    public Boolean excludeColumnSchema;
    public GetPartitionsRequest withExcludeColumnSchema(Boolean excludeColumnSchema) {
        this.excludeColumnSchema = excludeColumnSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expression")
    public String expression;
    public GetPartitionsRequest withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetPartitionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetPartitionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Segment")
    public Segment segment;
    public GetPartitionsRequest withSegment(Segment segment) {
        this.segment = segment;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public GetPartitionsRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}