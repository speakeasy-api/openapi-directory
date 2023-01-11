package openapisdk.models.shared;


public enum ReportStatusEnum {
    WORK_IN_PROGRESS("WORK_IN_PROGRESS"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED");

    public final String value;

    private ReportStatusEnum(String value) {
        this.value = value;
    }
}
