package openapisdk.models.shared;


public enum SensitiveDataItemCategoryEnum {
    FINANCIAL_INFORMATION("FINANCIAL_INFORMATION"),
    PERSONAL_INFORMATION("PERSONAL_INFORMATION"),
    CREDENTIALS("CREDENTIALS"),
    CUSTOM_IDENTIFIER("CUSTOM_IDENTIFIER");

    public final String value;

    private SensitiveDataItemCategoryEnum(String value) {
        this.value = value;
    }
}
