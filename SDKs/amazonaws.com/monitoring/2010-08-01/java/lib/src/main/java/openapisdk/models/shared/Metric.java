package openapisdk.models.shared;



/**
 * Metric
 * Represents a specific metric.
**/
public class Metric {
    public Dimension[] dimensions;
    public Metric withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    public String metricName;
    public Metric withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    public String namespace;
    public Metric withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}