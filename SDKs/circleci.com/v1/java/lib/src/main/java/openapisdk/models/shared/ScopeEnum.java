package openapisdk.models.shared;


public enum ScopeEnum {
    WRITE_SETTINGS("write-settings"),
    VIEW_BUILDS("view-builds"),
    READ_SETTINGS("read-settings"),
    TRIGGER_BUILDS("trigger-builds"),
    ALL("all"),
    STATUS("status"),
    NONE("none");

    public final String value;

    private ScopeEnum(String value) {
        this.value = value;
    }
}
