package openapisdk.models.operations;


public enum UpdateScheduledAuditRequestBodyFrequencyEnum {
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    BIWEEKLY("BIWEEKLY"),
    MONTHLY("MONTHLY");

    public final String value;

    private UpdateScheduledAuditRequestBodyFrequencyEnum(String value) {
        this.value = value;
    }
}
