package openapisdk.models.shared;


public enum CodeScanningAlertStateEnum {
    OPEN("open"),
    CLOSED("closed"),
    DISMISSED("dismissed"),
    FIXED("fixed");

    public final String value;

    private CodeScanningAlertStateEnum(String value) {
        this.value = value;
    }
}
