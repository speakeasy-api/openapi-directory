package openapisdk.models.shared;


public enum SseStatusEnum {
    ENABLING("ENABLING"),
    ENABLED("ENABLED"),
    DISABLING("DISABLING"),
    DISABLED("DISABLED");

    public final String value;

    private SseStatusEnum(String value) {
        this.value = value;
    }
}
