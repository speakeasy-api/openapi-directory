package openapisdk.models.operations;


public enum ListJobsStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    CANCELED("CANCELED"),
    COMPLETED("COMPLETED"),
    DELETION_IN_PROGRESS("DELETION_IN_PROGRESS");

    public final String value;

    private ListJobsStatusEnum(String value) {
        this.value = value;
    }
}
