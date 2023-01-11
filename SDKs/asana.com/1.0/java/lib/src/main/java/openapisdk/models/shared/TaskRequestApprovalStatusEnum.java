package openapisdk.models.shared;


public enum TaskRequestApprovalStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    REJECTED("rejected"),
    CHANGES_REQUESTED("changes_requested");

    public final String value;

    private TaskRequestApprovalStatusEnum(String value) {
        this.value = value;
    }
}
