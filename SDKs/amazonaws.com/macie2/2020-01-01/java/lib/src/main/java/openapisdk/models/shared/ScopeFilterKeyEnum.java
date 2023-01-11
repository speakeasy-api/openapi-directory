package openapisdk.models.shared;


public enum ScopeFilterKeyEnum {
    OBJECT_EXTENSION("OBJECT_EXTENSION"),
    OBJECT_LAST_MODIFIED_DATE("OBJECT_LAST_MODIFIED_DATE"),
    OBJECT_SIZE("OBJECT_SIZE"),
    OBJECT_KEY("OBJECT_KEY");

    public final String value;

    private ScopeFilterKeyEnum(String value) {
        this.value = value;
    }
}
