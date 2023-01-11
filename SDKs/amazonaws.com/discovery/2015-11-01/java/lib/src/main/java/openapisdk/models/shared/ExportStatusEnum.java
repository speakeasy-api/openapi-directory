package openapisdk.models.shared;


public enum ExportStatusEnum {
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    IN_PROGRESS("IN_PROGRESS");

    public final String value;

    private ExportStatusEnum(String value) {
        this.value = value;
    }
}
