package openapisdk.models.shared;


public enum TaskStateEnum {
    IN_PROGRESS("IN_PROGRESS"),
    CANCELED("CANCELED"),
    COMPLETED("COMPLETED");

    public final String value;

    private TaskStateEnum(String value) {
        this.value = value;
    }
}
