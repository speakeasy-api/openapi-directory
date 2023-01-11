package openapisdk.models.shared;



public class GetServiceLinkedRoleDeletionStatusResponse {
    public DeletionTaskFailureReasonType reason;
    public GetServiceLinkedRoleDeletionStatusResponse withReason(DeletionTaskFailureReasonType reason) {
        this.reason = reason;
        return this;
    }
    public DeletionTaskStatusTypeEnum status;
    public GetServiceLinkedRoleDeletionStatusResponse withStatus(DeletionTaskStatusTypeEnum status) {
        this.status = status;
        return this;
    }
}