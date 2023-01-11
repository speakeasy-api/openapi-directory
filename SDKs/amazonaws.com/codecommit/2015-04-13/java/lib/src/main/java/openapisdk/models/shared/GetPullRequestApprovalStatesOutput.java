package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPullRequestApprovalStatesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvals")
    public Approval[] approvals;
    public GetPullRequestApprovalStatesOutput withApprovals(Approval[] approvals) {
        this.approvals = approvals;
        return this;
    }
}