package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccessPreviewFindingsRequestBody {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public ListAccessPreviewFindingsRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public java.util.Map<String, openapisdk.models.shared.Criterion> filter;
    public ListAccessPreviewFindingsRequestBody withFilter(java.util.Map<String, openapisdk.models.shared.Criterion> filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListAccessPreviewFindingsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAccessPreviewFindingsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}