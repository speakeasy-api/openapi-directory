package openapisdk.models.shared;


public enum ChannelProtocolEnum {
    WSS("WSS"),
    HTTPS("HTTPS");

    public final String value;

    private ChannelProtocolEnum(String value) {
        this.value = value;
    }
}
