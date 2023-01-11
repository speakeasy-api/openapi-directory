package openapisdk.models.shared;


public enum FieldTypeEnum {
    STRING("STRING"),
    EMAIL("EMAIL"),
    CONCEALED("CONCEALED"),
    URL("URL"),
    TOTP("TOTP"),
    DATE("DATE"),
    MONTH_YEAR("MONTH_YEAR"),
    MENU("MENU");

    public final String value;

    private FieldTypeEnum(String value) {
        this.value = value;
    }
}
