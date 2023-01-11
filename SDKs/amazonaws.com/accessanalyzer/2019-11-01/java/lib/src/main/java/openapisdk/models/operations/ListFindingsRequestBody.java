package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFindingsRequestBody {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public ListFindingsRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public java.util.Map<String, openapisdk.models.shared.Criterion> filter;
    public ListFindingsRequestBody withFilter(java.util.Map<String, openapisdk.models.shared.Criterion> filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListFindingsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFindingsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public ListFindingsRequestBodySort sort;
    public ListFindingsRequestBody withSort(ListFindingsRequestBodySort sort) {
        this.sort = sort;
        return this;
    }
}