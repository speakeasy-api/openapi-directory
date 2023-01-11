package openapisdk.models.shared;


public enum StatusEnum {
    NOT_STARTED("NOT_STARTED"),
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
