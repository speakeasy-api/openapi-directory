package openapisdk.models.shared;


public enum HttpRulePatchRequestModeEnum {
    SINGLE("single"),
    BATCH("batch");

    public final String value;

    private HttpRulePatchRequestModeEnum(String value) {
        this.value = value;
    }
}
