package openapisdk.models.operations;


public enum PostDriversRequestBodySourceEnum {
    PHYSICAL("physical"),
    SLACK("slack"),
    TELEGRAM("telegram"),
    SMS("sms");

    public final String value;

    private PostDriversRequestBodySourceEnum(String value) {
        this.value = value;
    }
}
