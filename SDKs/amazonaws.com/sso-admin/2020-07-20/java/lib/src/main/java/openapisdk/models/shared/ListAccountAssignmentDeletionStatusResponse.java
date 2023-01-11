package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountAssignmentDeletionStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountAssignmentsDeletionStatus")
    public AccountAssignmentOperationStatusMetadata[] accountAssignmentsDeletionStatus;
    public ListAccountAssignmentDeletionStatusResponse withAccountAssignmentsDeletionStatus(AccountAssignmentOperationStatusMetadata[] accountAssignmentsDeletionStatus) {
        this.accountAssignmentsDeletionStatus = accountAssignmentsDeletionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountAssignmentDeletionStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}