package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTriggersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DependentJobName")
    public String dependentJobName;
    public GetTriggersRequest withDependentJobName(String dependentJobName) {
        this.dependentJobName = dependentJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetTriggersRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetTriggersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}