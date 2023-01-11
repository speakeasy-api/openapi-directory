package openapisdk.models.shared;


public enum UsageStatisticsSortKeyEnum {
    ACCOUNT_ID("accountId"),
    TOTAL("total"),
    SERVICE_LIMIT_VALUE("serviceLimitValue"),
    FREE_TRIAL_START_DATE("freeTrialStartDate");

    public final String value;

    private UsageStatisticsSortKeyEnum(String value) {
        this.value = value;
    }
}
