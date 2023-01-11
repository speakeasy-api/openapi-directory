package openapisdk.models.shared;


public enum CloudWatchMetricsStatEnum {
    SUM("Sum"),
    AVERAGE("Average"),
    SAMPLE_COUNT("SampleCount"),
    MINIMUM("Minimum"),
    MAXIMUM("Maximum"),
    P99("p99"),
    P90("p90"),
    P50("p50");

    public final String value;

    private CloudWatchMetricsStatEnum(String value) {
        this.value = value;
    }
}
