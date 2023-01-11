package openapisdk.models.shared;


public enum EventSourceStateEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED");

    public final String value;

    private EventSourceStateEnum(String value) {
        this.value = value;
    }
}
