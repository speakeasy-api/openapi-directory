package openapisdk.models.shared;


public enum ReportFilterPeriodTypeEnum {
    CUSTOM("Custom"),
    YESTERDAY("Yesterday"),
    LAST7_DAYS("Last7Days"),
    LAST_WEEK("LastWeek"),
    THIS_MONTH("ThisMonth"),
    LAST30_DAYS("Last30Days"),
    LAST_MONTH("LastMonth"),
    LAST60_DAYS("Last60Days"),
    LAST90_DAYS("Last90Days"),
    LAST3_MONTHS("Last3Months");

    public final String value;

    private ReportFilterPeriodTypeEnum(String value) {
        this.value = value;
    }
}
