package openapisdk.models.shared;


public enum QueryExecutionStateEnum {
    QUEUED("QUEUED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED");

    public final String value;

    private QueryExecutionStateEnum(String value) {
        this.value = value;
    }
}
