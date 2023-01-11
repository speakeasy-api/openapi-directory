package openapisdk.models.shared;


public enum OrderExportationReportingProcessingStatusEnum {
    NONE("None"),
    IN_PROGRESS("InProgress"),
    DONE("Done"),
    FAILED("Failed"),
    ALREADY_IN_PROGRESS("AlreadyInProgress"),
    ABORTED("Aborted"),
    SUSPENDED("Suspended");

    public final String value;

    private OrderExportationReportingProcessingStatusEnum(String value) {
        this.value = value;
    }
}
