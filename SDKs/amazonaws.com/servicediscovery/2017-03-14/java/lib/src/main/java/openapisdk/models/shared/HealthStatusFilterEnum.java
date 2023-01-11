package openapisdk.models.shared;


public enum HealthStatusFilterEnum {
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY"),
    ALL("ALL"),
    HEALTHY_OR_ELSE_ALL("HEALTHY_OR_ELSE_ALL");

    public final String value;

    private HealthStatusFilterEnum(String value) {
        this.value = value;
    }
}
