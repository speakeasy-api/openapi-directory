package openapisdk.models.shared;


public enum ConnectionStatusEnum {
    PENDING_HANDSHAKE("PENDING_HANDSHAKE"),
    AVAILABLE("AVAILABLE"),
    ERROR("ERROR"),
    DELETED("DELETED");

    public final String value;

    private ConnectionStatusEnum(String value) {
        this.value = value;
    }
}
