package openapisdk.models.shared;


public enum AuditReportResponseFormatEnum {
    JSON("JSON"),
    CSV("CSV");

    public final String value;

    private AuditReportResponseFormatEnum(String value) {
        this.value = value;
    }
}
