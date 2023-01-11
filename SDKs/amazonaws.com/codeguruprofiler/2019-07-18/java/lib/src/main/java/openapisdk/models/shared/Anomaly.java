package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Anomaly
 *  Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time. 
**/
public class Anomaly {
    @JsonProperty("instances")
    public AnomalyInstance[] instances;
    public Anomaly withInstances(AnomalyInstance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonProperty("metric")
    public Metric metric;
    public Anomaly withMetric(Metric metric) {
        this.metric = metric;
        return this;
    }
    @JsonProperty("reason")
    public String reason;
    public Anomaly withReason(String reason) {
        this.reason = reason;
        return this;
    }
}