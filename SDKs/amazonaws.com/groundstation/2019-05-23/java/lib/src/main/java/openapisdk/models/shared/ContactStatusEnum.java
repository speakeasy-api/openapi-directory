package openapisdk.models.shared;


public enum ContactStatusEnum {
    AVAILABLE("AVAILABLE"),
    AWS_CANCELLED("AWS_CANCELLED"),
    AWS_FAILED("AWS_FAILED"),
    CANCELLED("CANCELLED"),
    CANCELLING("CANCELLING"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    FAILED_TO_SCHEDULE("FAILED_TO_SCHEDULE"),
    PASS("PASS"),
    POSTPASS("POSTPASS"),
    PREPASS("PREPASS"),
    SCHEDULED("SCHEDULED"),
    SCHEDULING("SCHEDULING");

    public final String value;

    private ContactStatusEnum(String value) {
        this.value = value;
    }
}
