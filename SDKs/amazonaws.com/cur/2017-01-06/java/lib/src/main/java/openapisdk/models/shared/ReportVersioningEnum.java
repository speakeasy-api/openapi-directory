package openapisdk.models.shared;


public enum ReportVersioningEnum {
    CREATE_NEW_REPORT("CREATE_NEW_REPORT"),
    OVERWRITE_REPORT("OVERWRITE_REPORT");

    public final String value;

    private ReportVersioningEnum(String value) {
        this.value = value;
    }
}
