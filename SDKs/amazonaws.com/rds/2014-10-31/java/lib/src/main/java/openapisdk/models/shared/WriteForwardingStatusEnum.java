package openapisdk.models.shared;


public enum WriteForwardingStatusEnum {
    ENABLED("enabled"),
    DISABLED("disabled"),
    ENABLING("enabling"),
    DISABLING("disabling"),
    UNKNOWN("unknown");

    public final String value;

    private WriteForwardingStatusEnum(String value) {
        this.value = value;
    }
}
