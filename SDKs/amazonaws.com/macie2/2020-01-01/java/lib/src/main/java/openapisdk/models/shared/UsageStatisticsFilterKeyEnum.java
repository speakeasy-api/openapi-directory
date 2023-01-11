package openapisdk.models.shared;


public enum UsageStatisticsFilterKeyEnum {
    ACCOUNT_ID("accountId"),
    SERVICE_LIMIT("serviceLimit"),
    FREE_TRIAL_START_DATE("freeTrialStartDate"),
    TOTAL("total");

    public final String value;

    private UsageStatisticsFilterKeyEnum(String value) {
        this.value = value;
    }
}
