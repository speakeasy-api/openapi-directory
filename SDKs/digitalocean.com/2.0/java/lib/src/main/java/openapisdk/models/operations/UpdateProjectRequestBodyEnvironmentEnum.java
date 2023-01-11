package openapisdk.models.operations;


public enum UpdateProjectRequestBodyEnvironmentEnum {
    DEVELOPMENT("Development"),
    STAGING("Staging"),
    PRODUCTION("Production");

    public final String value;

    private UpdateProjectRequestBodyEnvironmentEnum(String value) {
        this.value = value;
    }
}
