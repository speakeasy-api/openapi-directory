package openapisdk.models.shared;


public enum ExportStatusEnum {
    IN_PROGRESS("InProgress"),
    COMPLETED("Completed"),
    FAILED("Failed"),
    DELETING("Deleting");

    public final String value;

    private ExportStatusEnum(String value) {
        this.value = value;
    }
}
