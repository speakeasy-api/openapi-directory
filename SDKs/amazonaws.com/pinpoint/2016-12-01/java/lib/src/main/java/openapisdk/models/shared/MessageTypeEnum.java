package openapisdk.models.shared;


public enum MessageTypeEnum {
    TRANSACTIONAL("TRANSACTIONAL"),
    PROMOTIONAL("PROMOTIONAL");

    public final String value;

    private MessageTypeEnum(String value) {
        this.value = value;
    }
}
