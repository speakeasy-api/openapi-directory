package openapisdk.models.shared;


public enum JobStatusEnum {
    PENDING("pending"),
    RUNNING("running"),
    INCOMPLETE("incomplete"),
    FAILED("failed"),
    SUCCEEDED("succeeded"),
    CANCELLED("cancelled");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
