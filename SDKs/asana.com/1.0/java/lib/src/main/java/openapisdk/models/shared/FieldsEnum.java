package openapisdk.models.shared;


public enum FieldsEnum {
    PORTFOLIO("portfolio"),
    PROJECT("project"),
    TAG("tag"),
    TASK("task"),
    USER("user");

    public final String value;

    private FieldsEnum(String value) {
        this.value = value;
    }
}
