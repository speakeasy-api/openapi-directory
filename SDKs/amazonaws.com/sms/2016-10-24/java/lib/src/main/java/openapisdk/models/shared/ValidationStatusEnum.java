package openapisdk.models.shared;


public enum ValidationStatusEnum {
    READY_FOR_VALIDATION("READY_FOR_VALIDATION"),
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private ValidationStatusEnum(String value) {
        this.value = value;
    }
}
