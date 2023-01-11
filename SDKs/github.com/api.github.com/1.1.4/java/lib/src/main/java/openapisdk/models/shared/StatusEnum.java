package openapisdk.models.shared;


public enum StatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
