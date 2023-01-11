package openapisdk.models.operations;


public enum ListTasksStateEnum {
    IN_PROGRESS("IN_PROGRESS"),
    CANCELED("CANCELED"),
    COMPLETED("COMPLETED");

    public final String value;

    private ListTasksStateEnum(String value) {
        this.value = value;
    }
}
