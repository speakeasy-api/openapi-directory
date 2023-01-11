package openapisdk.models.shared;


public enum ExecutionResultEnum {
    PENDING("PENDING"),
    PASSED("PASSED"),
    WARNED("WARNED"),
    FAILED("FAILED"),
    SKIPPED("SKIPPED"),
    ERRORED("ERRORED"),
    STOPPED("STOPPED");

    public final String value;

    private ExecutionResultEnum(String value) {
        this.value = value;
    }
}
