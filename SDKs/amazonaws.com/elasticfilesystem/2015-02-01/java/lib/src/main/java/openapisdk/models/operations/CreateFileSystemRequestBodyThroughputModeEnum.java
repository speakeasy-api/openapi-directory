package openapisdk.models.operations;


public enum CreateFileSystemRequestBodyThroughputModeEnum {
    BURSTING("bursting"),
    PROVISIONED("provisioned");

    public final String value;

    private CreateFileSystemRequestBodyThroughputModeEnum(String value) {
        this.value = value;
    }
}
