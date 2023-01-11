package openapisdk.models.shared;


public enum AuditReportStatusEnum {
    CREATING("CREATING"),
    SUCCESS("SUCCESS"),
    FAILED("FAILED");

    public final String value;

    private AuditReportStatusEnum(String value) {
        this.value = value;
    }
}
