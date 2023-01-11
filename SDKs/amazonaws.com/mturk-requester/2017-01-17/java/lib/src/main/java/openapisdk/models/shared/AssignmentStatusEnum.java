package openapisdk.models.shared;


public enum AssignmentStatusEnum {
    SUBMITTED("Submitted"),
    APPROVED("Approved"),
    REJECTED("Rejected");

    public final String value;

    private AssignmentStatusEnum(String value) {
        this.value = value;
    }
}
