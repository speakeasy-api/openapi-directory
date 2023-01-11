package openapisdk.models.shared;


public enum MessageStatusSubtypeEnum {
    EXPIRED("EXPIRED"),
    HANDSET_ERROR("HANDSET_ERROR"),
    BLOCKED("BLOCKED"),
    NOT_SENT("NOT_SENT");

    public final String value;

    private MessageStatusSubtypeEnum(String value) {
        this.value = value;
    }
}
