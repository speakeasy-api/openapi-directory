package openapisdk.models.shared;


public enum ServerStatusEnum {
    BACKING_UP("BACKING_UP"),
    CONNECTION_LOST("CONNECTION_LOST"),
    CREATING("CREATING"),
    DELETING("DELETING"),
    MODIFYING("MODIFYING"),
    FAILED("FAILED"),
    HEALTHY("HEALTHY"),
    RUNNING("RUNNING"),
    RESTORING("RESTORING"),
    SETUP("SETUP"),
    UNDER_MAINTENANCE("UNDER_MAINTENANCE"),
    UNHEALTHY("UNHEALTHY"),
    TERMINATED("TERMINATED");

    public final String value;

    private ServerStatusEnum(String value) {
        this.value = value;
    }
}
