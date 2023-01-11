package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountAssignmentCreationStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountAssignmentsCreationStatus")
    public AccountAssignmentOperationStatusMetadata[] accountAssignmentsCreationStatus;
    public ListAccountAssignmentCreationStatusResponse withAccountAssignmentsCreationStatus(AccountAssignmentOperationStatusMetadata[] accountAssignmentsCreationStatus) {
        this.accountAssignmentsCreationStatus = accountAssignmentsCreationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountAssignmentCreationStatusResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}