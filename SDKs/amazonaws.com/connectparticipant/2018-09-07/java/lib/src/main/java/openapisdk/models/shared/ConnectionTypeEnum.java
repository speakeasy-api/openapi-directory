package openapisdk.models.shared;


public enum ConnectionTypeEnum {
    WEBSOCKET("WEBSOCKET"),
    CONNECTION_CREDENTIALS("CONNECTION_CREDENTIALS");

    public final String value;

    private ConnectionTypeEnum(String value) {
        this.value = value;
    }
}
