package openapisdk.models.shared;


public enum SyncExecutionStatusEnum {
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    TIMED_OUT("TIMED_OUT");

    public final String value;

    private SyncExecutionStatusEnum(String value) {
        this.value = value;
    }
}
