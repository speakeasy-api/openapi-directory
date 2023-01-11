package openapisdk.models.shared;


public enum BeezUpCommonColumnDataTypeEnum {
    STRING("String"),
    URL("Url"),
    TEXT("Text"),
    DECIMAL("Decimal"),
    DATE_TIME("DateTime"),
    INT("Int"),
    SPECIAL_INT("SpecialInt"),
    IN_STOCK("InStock"),
    UNKNOWN("Unknown"),
    IMAGE_URL("ImageUrl");

    public final String value;

    private BeezUpCommonColumnDataTypeEnum(String value) {
        this.value = value;
    }
}
