package openapisdk.models.shared;


public enum TargetHealthStateEnumEnum {
    INITIAL("initial"),
    HEALTHY("healthy"),
    UNHEALTHY("unhealthy"),
    UNUSED("unused"),
    DRAINING("draining"),
    UNAVAILABLE("unavailable");

    public final String value;

    private TargetHealthStateEnumEnum(String value) {
        this.value = value;
    }
}
