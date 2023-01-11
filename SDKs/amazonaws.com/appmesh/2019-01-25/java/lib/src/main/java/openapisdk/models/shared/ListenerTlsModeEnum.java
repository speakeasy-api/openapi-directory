package openapisdk.models.shared;


public enum ListenerTlsModeEnum {
    STRICT("STRICT"),
    PERMISSIVE("PERMISSIVE"),
    DISABLED("DISABLED");

    public final String value;

    private ListenerTlsModeEnum(String value) {
        this.value = value;
    }
}
