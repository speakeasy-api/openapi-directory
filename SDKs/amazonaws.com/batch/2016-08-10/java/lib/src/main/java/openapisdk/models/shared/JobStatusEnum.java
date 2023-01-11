package openapisdk.models.shared;


public enum JobStatusEnum {
    SUBMITTED("SUBMITTED"),
    PENDING("PENDING"),
    RUNNABLE("RUNNABLE"),
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
