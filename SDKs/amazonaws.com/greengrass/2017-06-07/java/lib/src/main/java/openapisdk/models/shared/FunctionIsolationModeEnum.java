package openapisdk.models.shared;


public enum FunctionIsolationModeEnum {
    GREENGRASS_CONTAINER("GreengrassContainer"),
    NO_CONTAINER("NoContainer");

    public final String value;

    private FunctionIsolationModeEnum(String value) {
        this.value = value;
    }
}
