package openapisdk.models.shared;


public enum AssessmentReportStatusEnum {
    COMPLETE("COMPLETE"),
    IN_PROGRESS("IN_PROGRESS"),
    FAILED("FAILED");

    public final String value;

    private AssessmentReportStatusEnum(String value) {
        this.value = value;
    }
}
