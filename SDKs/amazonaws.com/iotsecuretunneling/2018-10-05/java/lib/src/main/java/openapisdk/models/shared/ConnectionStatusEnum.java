package openapisdk.models.shared;


public enum ConnectionStatusEnum {
    CONNECTED("CONNECTED"),
    DISCONNECTED("DISCONNECTED");

    public final String value;

    private ConnectionStatusEnum(String value) {
        this.value = value;
    }
}
