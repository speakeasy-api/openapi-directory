package openapisdk.models.shared;


public enum StatusEnum {
    IN_PROGRESS("InProgress"),
    COMPLETED("Completed"),
    FAILED("Failed"),
    CANCELLED("Cancelled"),
    CANCELLING("Cancelling");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
