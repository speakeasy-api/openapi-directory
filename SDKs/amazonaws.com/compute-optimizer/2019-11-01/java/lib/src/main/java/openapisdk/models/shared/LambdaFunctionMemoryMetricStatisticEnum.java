package openapisdk.models.shared;


public enum LambdaFunctionMemoryMetricStatisticEnum {
    LOWER_BOUND("LowerBound"),
    UPPER_BOUND("UpperBound"),
    EXPECTED("Expected");

    public final String value;

    private LambdaFunctionMemoryMetricStatisticEnum(String value) {
        this.value = value;
    }
}
