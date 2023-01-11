package openapisdk.models.shared;


public enum KeyPatchCapabilitiesEnum {
    PUBLISH("publish"),
    SUBSCRIBE("subscribe"),
    HISTORY("history"),
    PRESENCE("presence"),
    CHANNEL_METADATA("channel-metadata"),
    PUSH_ADMIN("push-admin"),
    PUSH_SUBSCRIBE("push-subscribe"),
    STATISTICS("statistics");

    public final String value;

    private KeyPatchCapabilitiesEnum(String value) {
        this.value = value;
    }
}
