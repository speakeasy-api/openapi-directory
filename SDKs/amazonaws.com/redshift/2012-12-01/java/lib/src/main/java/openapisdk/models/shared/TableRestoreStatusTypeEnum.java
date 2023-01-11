package openapisdk.models.shared;


public enum TableRestoreStatusTypeEnum {
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELED("CANCELED");

    public final String value;

    private TableRestoreStatusTypeEnum(String value) {
        this.value = value;
    }
}
