package openapisdk.models.shared;


public enum LambdaIsolationModeEnum {
    GREENGRASS_CONTAINER("GreengrassContainer"),
    NO_CONTAINER("NoContainer");

    public final String value;

    private LambdaIsolationModeEnum(String value) {
        this.value = value;
    }
}
