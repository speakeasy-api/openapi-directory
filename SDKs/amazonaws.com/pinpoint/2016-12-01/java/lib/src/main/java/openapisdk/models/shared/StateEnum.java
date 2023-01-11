package openapisdk.models.shared;


public enum StateEnum {
    DRAFT("DRAFT"),
    ACTIVE("ACTIVE"),
    COMPLETED("COMPLETED"),
    CANCELLED("CANCELLED"),
    CLOSED("CLOSED"),
    PAUSED("PAUSED");

    public final String value;

    private StateEnum(String value) {
        this.value = value;
    }
}
