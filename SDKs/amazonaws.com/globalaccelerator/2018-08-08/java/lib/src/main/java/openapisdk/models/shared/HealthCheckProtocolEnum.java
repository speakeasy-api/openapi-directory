package openapisdk.models.shared;


public enum HealthCheckProtocolEnum {
    TCP("TCP"),
    HTTP("HTTP"),
    HTTPS("HTTPS");

    public final String value;

    private HealthCheckProtocolEnum(String value) {
        this.value = value;
    }
}
