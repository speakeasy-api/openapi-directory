package openapisdk.models.shared;


public enum RangeModeEnum {
    FIRST("FIRST"),
    LAST("LAST"),
    LAST_BEFORE_MISSING_VALUES("LAST_BEFORE_MISSING_VALUES"),
    INCLUSIVE("INCLUSIVE"),
    EXCLUSIVE("EXCLUSIVE");

    public final String value;

    private RangeModeEnum(String value) {
        this.value = value;
    }
}
