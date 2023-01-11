package openapisdk.models.operations;


public enum PatchTokenRequestBodyChannelEnum {
    PHYSICAL("physical"),
    SLACK("slack"),
    TELEGRAM("telegram"),
    SMS("sms");

    public final String value;

    private PatchTokenRequestBodyChannelEnum(String value) {
        this.value = value;
    }
}
