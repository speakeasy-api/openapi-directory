package openapisdk.models.operations;


public enum CreateScheduledAuditRequestBodyFrequencyEnum {
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    BIWEEKLY("BIWEEKLY"),
    MONTHLY("MONTHLY");

    public final String value;

    private CreateScheduledAuditRequestBodyFrequencyEnum(String value) {
        this.value = value;
    }
}
