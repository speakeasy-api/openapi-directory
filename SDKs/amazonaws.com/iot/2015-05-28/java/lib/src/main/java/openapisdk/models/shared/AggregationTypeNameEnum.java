package openapisdk.models.shared;


public enum AggregationTypeNameEnum {
    STATISTICS("Statistics"),
    PERCENTILES("Percentiles"),
    CARDINALITY("Cardinality");

    public final String value;

    private AggregationTypeNameEnum(String value) {
        this.value = value;
    }
}
