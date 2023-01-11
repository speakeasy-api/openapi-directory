package openapisdk.models.shared;


public enum HttpRulePostRequestModeEnum {
    SINGLE("single"),
    BATCH("batch");

    public final String value;

    private HttpRulePostRequestModeEnum(String value) {
        this.value = value;
    }
}
