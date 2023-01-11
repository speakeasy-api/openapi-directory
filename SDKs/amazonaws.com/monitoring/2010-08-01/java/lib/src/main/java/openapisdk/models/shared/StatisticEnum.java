package openapisdk.models.shared;


public enum StatisticEnum {
    SAMPLE_COUNT("SampleCount"),
    AVERAGE("Average"),
    SUM("Sum"),
    MINIMUM("Minimum"),
    MAXIMUM("Maximum");

    public final String value;

    private StatisticEnum(String value) {
        this.value = value;
    }
}
