package openapisdk.models.shared;


public enum ImportStatusEnum {
    AUTH("auth"),
    ERROR("error"),
    NONE("none"),
    DETECTING("detecting"),
    CHOOSE("choose"),
    AUTH_FAILED("auth_failed"),
    IMPORTING("importing"),
    MAPPING("mapping"),
    WAITING_TO_PUSH("waiting_to_push"),
    PUSHING("pushing"),
    COMPLETE("complete"),
    SETUP("setup"),
    UNKNOWN("unknown"),
    DETECTION_FOUND_MULTIPLE("detection_found_multiple"),
    DETECTION_FOUND_NOTHING("detection_found_nothing"),
    DETECTION_NEEDS_AUTH("detection_needs_auth");

    public final String value;

    private ImportStatusEnum(String value) {
        this.value = value;
    }
}
