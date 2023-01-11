package openapisdk.models.shared;


public enum CheckRunStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed");

    public final String value;

    private CheckRunStatusEnum(String value) {
        this.value = value;
    }
}
