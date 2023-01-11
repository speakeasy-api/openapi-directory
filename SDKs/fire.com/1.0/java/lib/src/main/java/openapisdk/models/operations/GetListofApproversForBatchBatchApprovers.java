package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListofApproversForBatchBatchApprovers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvals")
    public GetListofApproversForBatchBatchApproversApprovals[] approvals;
    public GetListofApproversForBatchBatchApprovers withApprovals(GetListofApproversForBatchBatchApproversApprovals[] approvals) {
        this.approvals = approvals;
        return this;
    }
}