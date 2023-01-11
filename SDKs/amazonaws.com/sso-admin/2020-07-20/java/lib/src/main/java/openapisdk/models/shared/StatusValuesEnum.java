package openapisdk.models.shared;


public enum StatusValuesEnum {
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED");

    public final String value;

    private StatusValuesEnum(String value) {
        this.value = value;
    }
}
