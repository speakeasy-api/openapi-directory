package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchIndexRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexName")
    public String indexName;
    public SearchIndexRequestBody withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchIndexRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchIndexRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public SearchIndexRequestBody withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVersion")
    public String queryVersion;
    public SearchIndexRequestBody withQueryVersion(String queryVersion) {
        this.queryVersion = queryVersion;
        return this;
    }
}