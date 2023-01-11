package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Approval
 * Returns information about a specific approval on a pull request.
**/
public class Approval {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalState")
    public ApprovalStateEnum approvalState;
    public Approval withApprovalState(ApprovalStateEnum approvalState) {
        this.approvalState = approvalState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userArn")
    public String userArn;
    public Approval withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}