package openapisdk.models.shared;


public enum AzureFunctionRulePostRequestModeEnum {
    SINGLE("single"),
    BATCH("batch");

    public final String value;

    private AzureFunctionRulePostRequestModeEnum(String value) {
        this.value = value;
    }
}
