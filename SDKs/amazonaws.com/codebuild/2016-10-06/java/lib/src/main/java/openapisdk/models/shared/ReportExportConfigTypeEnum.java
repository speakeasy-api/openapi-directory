package openapisdk.models.shared;


public enum ReportExportConfigTypeEnum {
    S3("S3"),
    NO_EXPORT("NO_EXPORT");

    public final String value;

    private ReportExportConfigTypeEnum(String value) {
        this.value = value;
    }
}
