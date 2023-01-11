package openapisdk.models.shared;


public enum MessageTypeEnum {
    SENT("SENT"),
    RECEIVED("RECEIVED");

    public final String value;

    private MessageTypeEnum(String value) {
        this.value = value;
    }
}
