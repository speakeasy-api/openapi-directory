package openapisdk.models.shared;


public enum HealthStateEnum {
    INITIAL("INITIAL"),
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY");

    public final String value;

    private HealthStateEnum(String value) {
        this.value = value;
    }
}
