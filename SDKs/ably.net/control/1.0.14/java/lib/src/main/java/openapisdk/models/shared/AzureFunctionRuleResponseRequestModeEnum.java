package openapisdk.models.shared;


public enum AzureFunctionRuleResponseRequestModeEnum {
    SINGLE("single"),
    BATCH("batch");

    public final String value;

    private AzureFunctionRuleResponseRequestModeEnum(String value) {
        this.value = value;
    }
}
