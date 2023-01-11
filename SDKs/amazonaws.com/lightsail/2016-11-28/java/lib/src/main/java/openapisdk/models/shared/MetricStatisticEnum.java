package openapisdk.models.shared;


public enum MetricStatisticEnum {
    MINIMUM("Minimum"),
    MAXIMUM("Maximum"),
    SUM("Sum"),
    AVERAGE("Average"),
    SAMPLE_COUNT("SampleCount");

    public final String value;

    private MetricStatisticEnum(String value) {
        this.value = value;
    }
}
