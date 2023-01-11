package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCommunicationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterTime")
    public String afterTime;
    public DescribeCommunicationsRequest withAfterTime(String afterTime) {
        this.afterTime = afterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeTime")
    public String beforeTime;
    public DescribeCommunicationsRequest withBeforeTime(String beforeTime) {
        this.beforeTime = beforeTime;
        return this;
    }
    @JsonProperty("caseId")
    public String caseId;
    public DescribeCommunicationsRequest withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeCommunicationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeCommunicationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}