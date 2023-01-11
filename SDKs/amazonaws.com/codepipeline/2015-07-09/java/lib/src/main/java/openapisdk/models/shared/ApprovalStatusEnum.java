package openapisdk.models.shared;


public enum ApprovalStatusEnum {
    APPROVED("Approved"),
    REJECTED("Rejected");

    public final String value;

    private ApprovalStatusEnum(String value) {
        this.value = value;
    }
}
