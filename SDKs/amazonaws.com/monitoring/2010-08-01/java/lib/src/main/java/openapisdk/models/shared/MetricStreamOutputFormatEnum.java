package openapisdk.models.shared;


public enum MetricStreamOutputFormatEnum {
    JSON("json"),
    OPENTELEMETRY07("opentelemetry0.7");

    public final String value;

    private MetricStreamOutputFormatEnum(String value) {
        this.value = value;
    }
}
