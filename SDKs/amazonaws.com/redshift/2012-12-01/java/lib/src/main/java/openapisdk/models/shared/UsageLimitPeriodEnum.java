package openapisdk.models.shared;


public enum UsageLimitPeriodEnum {
    DAILY("daily"),
    WEEKLY("weekly"),
    MONTHLY("monthly");

    public final String value;

    private UsageLimitPeriodEnum(String value) {
        this.value = value;
    }
}
