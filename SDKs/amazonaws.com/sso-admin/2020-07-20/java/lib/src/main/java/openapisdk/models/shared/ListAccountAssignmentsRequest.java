package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountAssignmentsRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public ListAccountAssignmentsRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public ListAccountAssignmentsRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAccountAssignmentsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountAssignmentsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public ListAccountAssignmentsRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
}