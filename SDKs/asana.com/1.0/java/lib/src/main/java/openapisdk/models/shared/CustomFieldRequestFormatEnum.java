package openapisdk.models.shared;


public enum CustomFieldRequestFormatEnum {
    CURRENCY("currency"),
    IDENTIFIER("identifier"),
    PERCENTAGE("percentage"),
    CUSTOM("custom"),
    NONE("none");

    public final String value;

    private CustomFieldRequestFormatEnum(String value) {
        this.value = value;
    }
}
