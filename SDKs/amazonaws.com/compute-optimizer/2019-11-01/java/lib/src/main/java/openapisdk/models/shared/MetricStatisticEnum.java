package openapisdk.models.shared;


public enum MetricStatisticEnum {
    MAXIMUM("Maximum"),
    AVERAGE("Average");

    public final String value;

    private MetricStatisticEnum(String value) {
        this.value = value;
    }
}
