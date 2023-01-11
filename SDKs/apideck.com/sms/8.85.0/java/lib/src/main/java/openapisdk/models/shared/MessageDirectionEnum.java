package openapisdk.models.shared;


public enum MessageDirectionEnum {
    INBOUND("inbound"),
    OUTBOUND_API("outbound-api"),
    OUTBOUND_CALL("outbound-call"),
    OUTBOUND_REPLY("outbound-reply"),
    UNKNOWN("unknown");

    public final String value;

    private MessageDirectionEnum(String value) {
        this.value = value;
    }
}
