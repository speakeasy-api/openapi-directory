package openapisdk.models.shared;


public enum ChatItemTypeEnum {
    TYPING("TYPING"),
    PARTICIPANT_JOINED("PARTICIPANT_JOINED"),
    PARTICIPANT_LEFT("PARTICIPANT_LEFT"),
    CHAT_ENDED("CHAT_ENDED"),
    TRANSFER_SUCCEEDED("TRANSFER_SUCCEEDED"),
    TRANSFER_FAILED("TRANSFER_FAILED"),
    MESSAGE("MESSAGE"),
    EVENT("EVENT"),
    ATTACHMENT("ATTACHMENT"),
    CONNECTION_ACK("CONNECTION_ACK");

    public final String value;

    private ChatItemTypeEnum(String value) {
        this.value = value;
    }
}
