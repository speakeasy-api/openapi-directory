package openapisdk.models.shared;


public enum ConnectorStatusEnum {
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY");

    public final String value;

    private ConnectorStatusEnum(String value) {
        this.value = value;
    }
}
