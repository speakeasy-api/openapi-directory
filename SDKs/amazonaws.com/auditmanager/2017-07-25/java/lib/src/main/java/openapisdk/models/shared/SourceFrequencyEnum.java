package openapisdk.models.shared;


public enum SourceFrequencyEnum {
    DAILY("DAILY"),
    WEEKLY("WEEKLY"),
    MONTHLY("MONTHLY");

    public final String value;

    private SourceFrequencyEnum(String value) {
        this.value = value;
    }
}
