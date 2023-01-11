package openapisdk.models.shared;


public enum JobStatusEnum {
    CREATED("CREATED"),
    PREPARING_FOR_INITIALIZATION("PREPARING_FOR_INITIALIZATION"),
    INITIALIZING("INITIALIZING"),
    PROCESSING("PROCESSING"),
    PENDING_JOB("PENDING_JOB"),
    COMPLETING("COMPLETING"),
    COMPLETED("COMPLETED"),
    FAILING("FAILING"),
    FAILED("FAILED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
