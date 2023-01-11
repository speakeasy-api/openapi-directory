package openapisdk.models.shared;


public enum JobStatusEnum {
    CREATED("CREATED"),
    PROCESSING("PROCESSING"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
