package openapisdk.models.shared;


public enum ReplacementTypeEnumEnum {
    KEEP_BASE("KEEP_BASE"),
    KEEP_SOURCE("KEEP_SOURCE"),
    KEEP_DESTINATION("KEEP_DESTINATION"),
    USE_NEW_CONTENT("USE_NEW_CONTENT");

    public final String value;

    private ReplacementTypeEnumEnum(String value) {
        this.value = value;
    }
}
