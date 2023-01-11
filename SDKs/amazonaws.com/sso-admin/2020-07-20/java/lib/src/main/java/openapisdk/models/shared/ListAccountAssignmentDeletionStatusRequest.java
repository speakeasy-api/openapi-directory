package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountAssignmentDeletionStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public OperationStatusFilter filter;
    public ListAccountAssignmentDeletionStatusRequest withFilter(OperationStatusFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public ListAccountAssignmentDeletionStatusRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAccountAssignmentDeletionStatusRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountAssignmentDeletionStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}