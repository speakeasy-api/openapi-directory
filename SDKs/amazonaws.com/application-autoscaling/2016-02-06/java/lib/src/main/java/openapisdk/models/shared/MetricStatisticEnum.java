package openapisdk.models.shared;


public enum MetricStatisticEnum {
    AVERAGE("Average"),
    MINIMUM("Minimum"),
    MAXIMUM("Maximum"),
    SAMPLE_COUNT("SampleCount"),
    SUM("Sum");

    public final String value;

    private MetricStatisticEnum(String value) {
        this.value = value;
    }
}
