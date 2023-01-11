package openapisdk.models.shared;


public enum VerifyModeEnum {
    POINT_IN_TIME_CONSISTENT("POINT_IN_TIME_CONSISTENT"),
    ONLY_FILES_TRANSFERRED("ONLY_FILES_TRANSFERRED"),
    NONE("NONE");

    public final String value;

    private VerifyModeEnum(String value) {
        this.value = value;
    }
}
