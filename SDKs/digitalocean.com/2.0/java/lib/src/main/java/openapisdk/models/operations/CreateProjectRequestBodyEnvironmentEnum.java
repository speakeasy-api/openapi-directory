package openapisdk.models.operations;


public enum CreateProjectRequestBodyEnvironmentEnum {
    DEVELOPMENT("Development"),
    STAGING("Staging"),
    PRODUCTION("Production");

    public final String value;

    private CreateProjectRequestBodyEnvironmentEnum(String value) {
        this.value = value;
    }
}
