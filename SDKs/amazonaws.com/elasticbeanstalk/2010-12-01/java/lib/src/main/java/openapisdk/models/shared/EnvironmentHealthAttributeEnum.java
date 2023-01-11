package openapisdk.models.shared;


public enum EnvironmentHealthAttributeEnum {
    STATUS("Status"),
    COLOR("Color"),
    CAUSES("Causes"),
    APPLICATION_METRICS("ApplicationMetrics"),
    INSTANCES_HEALTH("InstancesHealth"),
    ALL("All"),
    HEALTH_STATUS("HealthStatus"),
    REFRESHED_AT("RefreshedAt");

    public final String value;

    private EnvironmentHealthAttributeEnum(String value) {
        this.value = value;
    }
}
