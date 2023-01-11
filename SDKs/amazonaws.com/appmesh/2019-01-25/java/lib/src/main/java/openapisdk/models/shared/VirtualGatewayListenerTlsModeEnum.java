package openapisdk.models.shared;


public enum VirtualGatewayListenerTlsModeEnum {
    STRICT("STRICT"),
    PERMISSIVE("PERMISSIVE"),
    DISABLED("DISABLED");

    public final String value;

    private VirtualGatewayListenerTlsModeEnum(String value) {
        this.value = value;
    }
}
