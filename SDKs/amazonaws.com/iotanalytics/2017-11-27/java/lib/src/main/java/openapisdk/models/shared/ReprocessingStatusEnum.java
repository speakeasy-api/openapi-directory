package openapisdk.models.shared;


public enum ReprocessingStatusEnum {
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    CANCELLED("CANCELLED"),
    FAILED("FAILED");

    public final String value;

    private ReprocessingStatusEnum(String value) {
        this.value = value;
    }
}
