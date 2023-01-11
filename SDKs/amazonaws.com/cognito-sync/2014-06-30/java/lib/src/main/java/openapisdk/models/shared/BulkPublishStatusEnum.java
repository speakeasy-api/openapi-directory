package openapisdk.models.shared;


public enum BulkPublishStatusEnum {
    NOT_STARTED("NOT_STARTED"),
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED");

    public final String value;

    private BulkPublishStatusEnum(String value) {
        this.value = value;
    }
}
