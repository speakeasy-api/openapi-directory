package openapisdk.models.shared;


public enum TableDataImportJobStatusEnum {
    SUBMITTED("SUBMITTED"),
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED");

    public final String value;

    private TableDataImportJobStatusEnum(String value) {
        this.value = value;
    }
}
