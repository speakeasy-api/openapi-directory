package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTranscriptRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactId")
    public String contactId;
    public GetTranscriptRequestBody withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetTranscriptRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetTranscriptRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScanDirection")
    public GetTranscriptRequestBodyScanDirectionEnum scanDirection;
    public GetTranscriptRequestBody withScanDirection(GetTranscriptRequestBodyScanDirectionEnum scanDirection) {
        this.scanDirection = scanDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public GetTranscriptRequestBodySortOrderEnum sortOrder;
    public GetTranscriptRequestBody withSortOrder(GetTranscriptRequestBodySortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPosition")
    public GetTranscriptRequestBodyStartPosition startPosition;
    public GetTranscriptRequestBody withStartPosition(GetTranscriptRequestBodyStartPosition startPosition) {
        this.startPosition = startPosition;
        return this;
    }
}