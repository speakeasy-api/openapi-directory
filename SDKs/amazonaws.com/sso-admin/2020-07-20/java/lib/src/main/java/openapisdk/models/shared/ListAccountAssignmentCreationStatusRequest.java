package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountAssignmentCreationStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public OperationStatusFilter filter;
    public ListAccountAssignmentCreationStatusRequest withFilter(OperationStatusFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public ListAccountAssignmentCreationStatusRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAccountAssignmentCreationStatusRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountAssignmentCreationStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}