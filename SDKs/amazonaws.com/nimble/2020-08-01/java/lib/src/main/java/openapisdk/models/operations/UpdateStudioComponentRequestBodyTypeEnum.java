package openapisdk.models.operations;


public enum UpdateStudioComponentRequestBodyTypeEnum {
    ACTIVE_DIRECTORY("ACTIVE_DIRECTORY"),
    SHARED_FILE_SYSTEM("SHARED_FILE_SYSTEM"),
    COMPUTE_FARM("COMPUTE_FARM"),
    LICENSE_SERVICE("LICENSE_SERVICE"),
    CUSTOM("CUSTOM");

    public final String value;

    private UpdateStudioComponentRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
