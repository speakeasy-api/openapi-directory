package openapisdk.models.shared;


public enum ActivityTypeEnum {
    CALL("call"),
    MEETING("meeting"),
    EMAIL("email"),
    NOTE("note"),
    TASK("task"),
    DEADLINE("deadline"),
    SEND_LETTER("send-letter"),
    SEND_QUOTE("send-quote"),
    OTHER("other");

    public final String value;

    private ActivityTypeEnum(String value) {
        this.value = value;
    }
}
