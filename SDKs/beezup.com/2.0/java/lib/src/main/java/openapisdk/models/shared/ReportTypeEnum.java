package openapisdk.models.shared;


public enum ReportTypeEnum {
    BY_CHANNEL("ByChannel"),
    BY_CATEGORY("ByCategory"),
    BY_PRODUCT("ByProduct"),
    BY_DAY("ByDay");

    public final String value;

    private ReportTypeEnum(String value) {
        this.value = value;
    }
}
