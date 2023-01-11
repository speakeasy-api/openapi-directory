package openapisdk.models.operations;


public enum CreateFileSystemRequestBodyPerformanceModeEnum {
    GENERAL_PURPOSE("generalPurpose"),
    MAX_IO("maxIO");

    public final String value;

    private CreateFileSystemRequestBodyPerformanceModeEnum(String value) {
        this.value = value;
    }
}
