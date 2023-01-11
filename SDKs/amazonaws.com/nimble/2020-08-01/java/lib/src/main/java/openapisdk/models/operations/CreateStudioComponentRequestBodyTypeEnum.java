package openapisdk.models.operations;


public enum CreateStudioComponentRequestBodyTypeEnum {
    ACTIVE_DIRECTORY("ACTIVE_DIRECTORY"),
    SHARED_FILE_SYSTEM("SHARED_FILE_SYSTEM"),
    COMPUTE_FARM("COMPUTE_FARM"),
    LICENSE_SERVICE("LICENSE_SERVICE"),
    CUSTOM("CUSTOM");

    public final String value;

    private CreateStudioComponentRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
