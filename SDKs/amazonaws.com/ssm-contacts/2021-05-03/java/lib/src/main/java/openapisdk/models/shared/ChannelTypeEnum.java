package openapisdk.models.shared;


public enum ChannelTypeEnum {
    SMS("SMS"),
    VOICE("VOICE"),
    EMAIL("EMAIL");

    public final String value;

    private ChannelTypeEnum(String value) {
        this.value = value;
    }
}
