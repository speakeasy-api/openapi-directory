package openapisdk.models.operations;


public enum PostTokensRequestBodyChannelEnum {
    PHYSICAL("physical"),
    SLACK("slack"),
    TELEGRAM("telegram"),
    SMS("sms");

    public final String value;

    private PostTokensRequestBodyChannelEnum(String value) {
        this.value = value;
    }
}
