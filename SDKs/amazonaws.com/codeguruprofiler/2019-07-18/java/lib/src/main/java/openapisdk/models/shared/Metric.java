package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Metric
 *  Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame. 
**/
public class Metric {
    @JsonProperty("frameName")
    public String frameName;
    public Metric withFrameName(String frameName) {
        this.frameName = frameName;
        return this;
    }
    @JsonProperty("threadStates")
    public String[] threadStates;
    public Metric withThreadStates(String[] threadStates) {
        this.threadStates = threadStates;
        return this;
    }
    @JsonProperty("type")
    public MetricTypeEnum type;
    public Metric withType(MetricTypeEnum type) {
        this.type = type;
        return this;
    }
}