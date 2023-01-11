package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAccountAssignmentDeletionStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountAssignmentDeletionStatus")
    public AccountAssignmentOperationStatus accountAssignmentDeletionStatus;
    public DescribeAccountAssignmentDeletionStatusResponse withAccountAssignmentDeletionStatus(AccountAssignmentOperationStatus accountAssignmentDeletionStatus) {
        this.accountAssignmentDeletionStatus = accountAssignmentDeletionStatus;
        return this;
    }
}