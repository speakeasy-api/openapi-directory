package openapisdk.models.shared;


public enum ConnectivityEnum {
    CONNECTED("CONNECTED"),
    DISCONNECTED("DISCONNECTED");

    public final String value;

    private ConnectivityEnum(String value) {
        this.value = value;
    }
}
