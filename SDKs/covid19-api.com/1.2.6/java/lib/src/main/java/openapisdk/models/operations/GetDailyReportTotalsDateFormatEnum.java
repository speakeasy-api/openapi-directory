package openapisdk.models.operations;


public enum GetDailyReportTotalsDateFormatEnum {
    YYYY_MM_DD("YYYY-MM-DD"),
    YYYY_DD_MM("YYYY-DD-MM"),
    DD_MM_YYYY("DD-MM-YYYY"),
    MM_DD_YYYY("MM-DD-YYYY");

    public final String value;

    private GetDailyReportTotalsDateFormatEnum(String value) {
        this.value = value;
    }
}
