package openapisdk.models.shared;


public enum ScopeEnum {
    TASK("task"),
    SHARED("shared");

    public final String value;

    private ScopeEnum(String value) {
        this.value = value;
    }
}
