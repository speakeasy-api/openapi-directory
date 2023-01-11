package openapisdk.models.shared;


public enum ConnectionStateEnum {
    CONNECTED("CONNECTED"),
    DISCONNECTED("DISCONNECTED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private ConnectionStateEnum(String value) {
        this.value = value;
    }
}
