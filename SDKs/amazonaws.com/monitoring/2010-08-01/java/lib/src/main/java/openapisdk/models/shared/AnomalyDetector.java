package openapisdk.models.shared;



/**
 * AnomalyDetector
 * An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed.
**/
public class AnomalyDetector {
    public AnomalyDetectorConfiguration configuration;
    public AnomalyDetector withConfiguration(AnomalyDetectorConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    public Dimension[] dimensions;
    public AnomalyDetector withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    public String metricName;
    public AnomalyDetector withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    public String namespace;
    public AnomalyDetector withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    public String stat;
    public AnomalyDetector withStat(String stat) {
        this.stat = stat;
        return this;
    }
    public AnomalyDetectorStateValueEnum stateValue;
    public AnomalyDetector withStateValue(AnomalyDetectorStateValueEnum stateValue) {
        this.stateValue = stateValue;
        return this;
    }
}