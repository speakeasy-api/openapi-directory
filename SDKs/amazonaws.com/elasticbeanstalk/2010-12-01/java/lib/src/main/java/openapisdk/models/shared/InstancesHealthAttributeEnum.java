package openapisdk.models.shared;


public enum InstancesHealthAttributeEnum {
    HEALTH_STATUS("HealthStatus"),
    COLOR("Color"),
    CAUSES("Causes"),
    APPLICATION_METRICS("ApplicationMetrics"),
    REFRESHED_AT("RefreshedAt"),
    LAUNCHED_AT("LaunchedAt"),
    SYSTEM("System"),
    DEPLOYMENT("Deployment"),
    AVAILABILITY_ZONE("AvailabilityZone"),
    INSTANCE_TYPE("InstanceType"),
    ALL("All");

    public final String value;

    private InstancesHealthAttributeEnum(String value) {
        this.value = value;
    }
}
