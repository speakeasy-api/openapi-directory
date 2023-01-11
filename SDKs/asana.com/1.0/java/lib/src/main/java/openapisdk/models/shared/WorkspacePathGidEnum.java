package openapisdk.models.shared;


public enum WorkspacePathGidEnum {
    CUSTOM_FIELD("custom_field"),
    PORTFOLIO("portfolio"),
    PROJECT("project"),
    TAG("tag"),
    TASK("task"),
    USER("user");

    public final String value;

    private WorkspacePathGidEnum(String value) {
        this.value = value;
    }
}
