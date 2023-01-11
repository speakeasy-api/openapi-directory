package openapisdk.models.shared;


public enum AzureFunctionRulePatchRequestModeEnum {
    SINGLE("single"),
    BATCH("batch");

    public final String value;

    private AzureFunctionRulePatchRequestModeEnum(String value) {
        this.value = value;
    }
}
