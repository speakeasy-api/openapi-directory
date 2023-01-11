package openapisdk.models.shared;


public enum StreamProcessorStatusEnum {
    STOPPED("STOPPED"),
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    FAILED("FAILED"),
    STOPPING("STOPPING");

    public final String value;

    private StreamProcessorStatusEnum(String value) {
        this.value = value;
    }
}
