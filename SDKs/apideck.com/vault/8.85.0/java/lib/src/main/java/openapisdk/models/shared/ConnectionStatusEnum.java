package openapisdk.models.shared;


public enum ConnectionStatusEnum {
    LIVE("live"),
    UPCOMING("upcoming"),
    REQUESTED("requested");

    public final String value;

    private ConnectionStatusEnum(String value) {
        this.value = value;
    }
}
