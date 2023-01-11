package openapisdk.models.shared;


public enum MessageTypeEnum {
    RAW("RAW"),
    DIGEST("DIGEST");

    public final String value;

    private MessageTypeEnum(String value) {
        this.value = value;
    }
}
