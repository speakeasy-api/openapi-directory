package openapisdk.models.shared;


public enum StudioComponentTypeEnum {
    ACTIVE_DIRECTORY("ACTIVE_DIRECTORY"),
    SHARED_FILE_SYSTEM("SHARED_FILE_SYSTEM"),
    COMPUTE_FARM("COMPUTE_FARM"),
    LICENSE_SERVICE("LICENSE_SERVICE"),
    CUSTOM("CUSTOM");

    public final String value;

    private StudioComponentTypeEnum(String value) {
        this.value = value;
    }
}
