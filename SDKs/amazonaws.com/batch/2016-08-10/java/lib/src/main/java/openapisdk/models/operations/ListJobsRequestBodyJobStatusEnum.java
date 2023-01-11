package openapisdk.models.operations;


public enum ListJobsRequestBodyJobStatusEnum {
    SUBMITTED("SUBMITTED"),
    PENDING("PENDING"),
    RUNNABLE("RUNNABLE"),
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private ListJobsRequestBodyJobStatusEnum(String value) {
        this.value = value;
    }
}
