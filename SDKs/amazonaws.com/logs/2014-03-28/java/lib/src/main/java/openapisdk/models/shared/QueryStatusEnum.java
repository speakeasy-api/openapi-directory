package openapisdk.models.shared;


public enum QueryStatusEnum {
    SCHEDULED("Scheduled"),
    RUNNING("Running"),
    COMPLETE("Complete"),
    FAILED("Failed"),
    CANCELLED("Cancelled"),
    TIMEOUT("Timeout"),
    UNKNOWN("Unknown");

    public final String value;

    private QueryStatusEnum(String value) {
        this.value = value;
    }
}
