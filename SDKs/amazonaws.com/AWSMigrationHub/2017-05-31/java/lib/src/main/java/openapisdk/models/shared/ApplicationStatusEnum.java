package openapisdk.models.shared;


public enum ApplicationStatusEnum {
    NOT_STARTED("NOT_STARTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED");

    public final String value;

    private ApplicationStatusEnum(String value) {
        this.value = value;
    }
}
