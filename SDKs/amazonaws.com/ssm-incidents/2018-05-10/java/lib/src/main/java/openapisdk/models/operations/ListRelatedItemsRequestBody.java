package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRelatedItemsRequestBody {
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public ListRelatedItemsRequestBody withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListRelatedItemsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRelatedItemsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}