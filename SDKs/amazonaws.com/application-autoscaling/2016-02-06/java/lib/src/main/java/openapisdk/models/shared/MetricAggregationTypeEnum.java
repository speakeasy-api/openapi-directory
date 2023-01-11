package openapisdk.models.shared;


public enum MetricAggregationTypeEnum {
    AVERAGE("Average"),
    MINIMUM("Minimum"),
    MAXIMUM("Maximum");

    public final String value;

    private MetricAggregationTypeEnum(String value) {
        this.value = value;
    }
}
