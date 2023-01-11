package openapisdk.models.shared;


public enum StatusCodeEnum {
    IN_PROGRESS("InProgress"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed");

    public final String value;

    private StatusCodeEnum(String value) {
        this.value = value;
    }
}
