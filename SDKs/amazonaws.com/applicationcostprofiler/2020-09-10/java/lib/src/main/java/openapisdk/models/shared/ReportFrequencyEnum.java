package openapisdk.models.shared;


public enum ReportFrequencyEnum {
    MONTHLY("MONTHLY"),
    DAILY("DAILY"),
    ALL("ALL");

    public final String value;

    private ReportFrequencyEnum(String value) {
        this.value = value;
    }
}
