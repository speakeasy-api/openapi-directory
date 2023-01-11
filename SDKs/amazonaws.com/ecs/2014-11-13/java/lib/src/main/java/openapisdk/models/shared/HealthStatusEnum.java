package openapisdk.models.shared;


public enum HealthStatusEnum {
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private HealthStatusEnum(String value) {
        this.value = value;
    }
}
