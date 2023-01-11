package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRealtimeContactAnalysisSegmentsRequestBody {
    @JsonProperty("ContactId")
    public String contactId;
    public ListRealtimeContactAnalysisSegmentsRequestBody withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public ListRealtimeContactAnalysisSegmentsRequestBody withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListRealtimeContactAnalysisSegmentsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRealtimeContactAnalysisSegmentsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}