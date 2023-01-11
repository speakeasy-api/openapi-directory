package openapisdk.models.shared;


public enum CodeScanningAlertRuleSeverityEnum {
    NONE("none"),
    NOTE("note"),
    WARNING("warning"),
    ERROR("error");

    public final String value;

    private CodeScanningAlertRuleSeverityEnum(String value) {
        this.value = value;
    }
}
