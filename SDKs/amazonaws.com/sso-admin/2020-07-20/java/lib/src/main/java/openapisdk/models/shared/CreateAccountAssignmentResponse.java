package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAccountAssignmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountAssignmentCreationStatus")
    public AccountAssignmentOperationStatus accountAssignmentCreationStatus;
    public CreateAccountAssignmentResponse withAccountAssignmentCreationStatus(AccountAssignmentOperationStatus accountAssignmentCreationStatus) {
        this.accountAssignmentCreationStatus = accountAssignmentCreationStatus;
        return this;
    }
}