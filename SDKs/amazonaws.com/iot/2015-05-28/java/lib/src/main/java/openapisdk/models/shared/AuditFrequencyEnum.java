package openapisdk.models.shared;


public enum AuditFrequencyEnum {
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    BIWEEKLY("BIWEEKLY"),
    MONTHLY("MONTHLY");

    public final String value;

    private AuditFrequencyEnum(String value) {
        this.value = value;
    }
}
