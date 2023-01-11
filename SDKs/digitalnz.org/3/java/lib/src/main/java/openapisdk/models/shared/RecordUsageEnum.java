package openapisdk.models.shared;


public enum RecordUsageEnum {
    ALL_RIGHTS_RESERVED("All rights reserved"),
    SHARE("Share"),
    MODIFY("Modify"),
    USE_COMMERCIALLY("Use commercially"),
    UNKNOWN("Unknown");

    public final String value;

    private RecordUsageEnum(String value) {
        this.value = value;
    }
}
