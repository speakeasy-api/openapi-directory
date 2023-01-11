package openapisdk.models.shared;


public enum InstanceHealthStateEnum {
    INITIAL("initial"),
    HEALTHY("healthy"),
    UNHEALTHY("unhealthy"),
    UNUSED("unused"),
    DRAINING("draining"),
    UNAVAILABLE("unavailable");

    public final String value;

    private InstanceHealthStateEnum(String value) {
        this.value = value;
    }
}
