package openapisdk.models.shared;


public enum MessageStatusEnum {
    ACCEPTED("accepted"),
    SCHEDULED("scheduled"),
    CANCELED("canceled"),
    QUEUED("queued"),
    SENDING("sending"),
    SENT("sent"),
    FAILED("failed"),
    DELIVERED("delivered"),
    UNDELIVERED("undelivered"),
    RECEIVING("receiving"),
    RECEIVED("received"),
    READ("read");

    public final String value;

    private MessageStatusEnum(String value) {
        this.value = value;
    }
}
