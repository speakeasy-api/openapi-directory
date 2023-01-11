package openapisdk.models.operations;


public enum ListExecutionsStateEnum {
    QUEUED("QUEUED"),
    IN_PROGRESS("IN_PROGRESS"),
    CANCELED("CANCELED"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    REJECTED("REJECTED"),
    TIMED_OUT("TIMED_OUT");

    public final String value;

    private ListExecutionsStateEnum(String value) {
        this.value = value;
    }
}
