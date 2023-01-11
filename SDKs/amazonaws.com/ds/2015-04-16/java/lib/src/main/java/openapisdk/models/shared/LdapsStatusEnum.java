package openapisdk.models.shared;


public enum LdapsStatusEnum {
    ENABLING("Enabling"),
    ENABLED("Enabled"),
    ENABLE_FAILED("EnableFailed"),
    DISABLED("Disabled");

    public final String value;

    private LdapsStatusEnum(String value) {
        this.value = value;
    }
}
