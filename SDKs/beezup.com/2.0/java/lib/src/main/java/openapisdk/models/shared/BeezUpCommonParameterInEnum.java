package openapisdk.models.shared;


public enum BeezUpCommonParameterInEnum {
    PATH("path"),
    HEADER("header"),
    QUERY("query"),
    BODY("body");

    public final String value;

    private BeezUpCommonParameterInEnum(String value) {
        this.value = value;
    }
}
