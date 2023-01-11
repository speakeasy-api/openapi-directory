package openapisdk.models.shared;


public enum DeletionTaskStatusTypeEnum {
    SUCCEEDED("SUCCEEDED"),
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    NOT_STARTED("NOT_STARTED");

    public final String value;

    private DeletionTaskStatusTypeEnum(String value) {
        this.value = value;
    }
}
