package openapisdk.models.shared;


public enum AttributeTypeEnum {
    INCLUSIVE("INCLUSIVE"),
    EXCLUSIVE("EXCLUSIVE"),
    CONTAINS("CONTAINS"),
    BEFORE("BEFORE"),
    AFTER("AFTER"),
    ON("ON"),
    BETWEEN("BETWEEN");

    public final String value;

    private AttributeTypeEnum(String value) {
        this.value = value;
    }
}
