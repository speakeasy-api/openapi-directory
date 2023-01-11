package openapisdk.models.shared;


public enum EventSourcePositionEnum {
    TRIM_HORIZON("TRIM_HORIZON"),
    LATEST("LATEST"),
    AT_TIMESTAMP("AT_TIMESTAMP");

    public final String value;

    private EventSourcePositionEnum(String value) {
        this.value = value;
    }
}
