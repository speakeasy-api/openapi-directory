package openapisdk.models.shared;


public enum CustomHealthStatusEnum {
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY");

    public final String value;

    private CustomHealthStatusEnum(String value) {
        this.value = value;
    }
}
