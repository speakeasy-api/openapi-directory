package openapisdk.models.shared;


public enum TaskResponseApprovalStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    REJECTED("rejected"),
    CHANGES_REQUESTED("changes_requested");

    public final String value;

    private TaskResponseApprovalStatusEnum(String value) {
        this.value = value;
    }
}
