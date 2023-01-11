package openapisdk.models.shared;


public enum CopyProductStatusEnum {
    SUCCEEDED("SUCCEEDED"),
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED");

    public final String value;

    private CopyProductStatusEnum(String value) {
        this.value = value;
    }
}
