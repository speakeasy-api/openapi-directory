package openapisdk.models.shared;


public enum HealthCheckTypeEnum {
    HTTP("HTTP"),
    HTTPS("HTTPS"),
    TCP("TCP");

    public final String value;

    private HealthCheckTypeEnum(String value) {
        this.value = value;
    }
}
