package openapisdk.models.shared;


public enum ScanStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETE("COMPLETE"),
    FAILED("FAILED");

    public final String value;

    private ScanStatusEnum(String value) {
        this.value = value;
    }
}
