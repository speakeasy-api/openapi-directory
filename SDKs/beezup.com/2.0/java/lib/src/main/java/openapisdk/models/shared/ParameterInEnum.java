package openapisdk.models.shared;


public enum ParameterInEnum {
    PATH("path"),
    HEADER("header"),
    QUERY("query"),
    BODY("body"),
    FILE("file");

    public final String value;

    private ParameterInEnum(String value) {
        this.value = value;
    }
}
