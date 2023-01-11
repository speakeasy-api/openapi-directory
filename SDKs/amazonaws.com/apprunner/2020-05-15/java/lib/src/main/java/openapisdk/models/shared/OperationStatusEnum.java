package openapisdk.models.shared;


public enum OperationStatusEnum {
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    ROLLBACK_IN_PROGRESS("ROLLBACK_IN_PROGRESS"),
    ROLLBACK_FAILED("ROLLBACK_FAILED"),
    ROLLBACK_SUCCEEDED("ROLLBACK_SUCCEEDED");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
