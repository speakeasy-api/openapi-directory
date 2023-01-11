package openapisdk.models.shared;


public enum CustomFieldResponseFormatEnum {
    CURRENCY("currency"),
    IDENTIFIER("identifier"),
    PERCENTAGE("percentage"),
    CUSTOM("custom"),
    NONE("none");

    public final String value;

    private CustomFieldResponseFormatEnum(String value) {
        this.value = value;
    }
}
