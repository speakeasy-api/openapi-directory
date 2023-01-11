package openapisdk.models.shared;


public enum UpdateStatusEnum {
    IN_PROGRESS("InProgress"),
    FAILED("Failed"),
    CANCELLED("Cancelled"),
    SUCCESSFUL("Successful");

    public final String value;

    private UpdateStatusEnum(String value) {
        this.value = value;
    }
}
