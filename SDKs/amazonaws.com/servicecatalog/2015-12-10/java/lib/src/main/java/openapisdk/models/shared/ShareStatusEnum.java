package openapisdk.models.shared;


public enum ShareStatusEnum {
    NOT_STARTED("NOT_STARTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    COMPLETED_WITH_ERRORS("COMPLETED_WITH_ERRORS"),
    ERROR("ERROR");

    public final String value;

    private ShareStatusEnum(String value) {
        this.value = value;
    }
}
