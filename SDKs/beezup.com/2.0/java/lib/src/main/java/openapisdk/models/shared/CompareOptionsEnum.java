package openapisdk.models.shared;


public enum CompareOptionsEnum {
    NONE("None"),
    IGNORE_CASE("IgnoreCase"),
    IGNORE_NON_SPACE("IgnoreNonSpace"),
    IGNORE_SYMBOLS("IgnoreSymbols"),
    ORDINAL_IGNORE_CASE("OrdinalIgnoreCase"),
    STRING_SORT("StringSort"),
    ORDINAL("Ordinal");

    public final String value;

    private CompareOptionsEnum(String value) {
        this.value = value;
    }
}
