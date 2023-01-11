package openapisdk.models.shared;


public enum LambdaFunctionMetricNameEnum {
    DURATION("Duration"),
    MEMORY("Memory");

    public final String value;

    private LambdaFunctionMetricNameEnum(String value) {
        this.value = value;
    }
}
