package openapisdk.models.shared;


public enum MessageFormatTypeEnum {
    PLAIN_TEXT("PlainText"),
    CUSTOM_PAYLOAD("CustomPayload"),
    SSML("SSML"),
    COMPOSITE("Composite");

    public final String value;

    private MessageFormatTypeEnum(String value) {
        this.value = value;
    }
}
