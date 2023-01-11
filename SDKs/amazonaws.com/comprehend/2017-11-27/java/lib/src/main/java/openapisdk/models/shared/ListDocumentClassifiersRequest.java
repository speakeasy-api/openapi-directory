package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDocumentClassifiersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public DocumentClassifierFilter filter;
    public ListDocumentClassifiersRequest withFilter(DocumentClassifierFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListDocumentClassifiersRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDocumentClassifiersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}