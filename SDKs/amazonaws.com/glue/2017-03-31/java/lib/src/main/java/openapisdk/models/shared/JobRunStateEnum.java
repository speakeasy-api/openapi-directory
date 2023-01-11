package openapisdk.models.shared;


public enum JobRunStateEnum {
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    TIMEOUT("TIMEOUT");

    public final String value;

    private JobRunStateEnum(String value) {
        this.value = value;
    }
}
