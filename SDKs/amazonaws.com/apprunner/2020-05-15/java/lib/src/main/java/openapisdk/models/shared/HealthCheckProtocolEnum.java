package openapisdk.models.shared;


public enum HealthCheckProtocolEnum {
    TCP("TCP"),
    HTTP("HTTP");

    public final String value;

    private HealthCheckProtocolEnum(String value) {
        this.value = value;
    }
}
