package openapisdk.models.shared;


public enum AggregationFunctionEnum {
    AVG("AVG"),
    SUM("SUM");

    public final String value;

    private AggregationFunctionEnum(String value) {
        this.value = value;
    }
}
