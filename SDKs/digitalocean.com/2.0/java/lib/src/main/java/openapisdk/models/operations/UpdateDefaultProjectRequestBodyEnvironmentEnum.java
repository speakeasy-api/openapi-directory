package openapisdk.models.operations;


public enum UpdateDefaultProjectRequestBodyEnvironmentEnum {
    DEVELOPMENT("Development"),
    STAGING("Staging"),
    PRODUCTION("Production");

    public final String value;

    private UpdateDefaultProjectRequestBodyEnvironmentEnum(String value) {
        this.value = value;
    }
}
