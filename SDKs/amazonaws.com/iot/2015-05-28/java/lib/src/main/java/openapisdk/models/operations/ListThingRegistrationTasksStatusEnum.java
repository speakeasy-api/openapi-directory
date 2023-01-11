package openapisdk.models.operations;


public enum ListThingRegistrationTasksStatusEnum {
    IN_PROGRESS("InProgress"),
    COMPLETED("Completed"),
    FAILED("Failed"),
    CANCELLED("Cancelled"),
    CANCELLING("Cancelling");

    public final String value;

    private ListThingRegistrationTasksStatusEnum(String value) {
        this.value = value;
    }
}
