package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HpoObjective
 * <p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>
**/
public class HpoObjective {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public HpoObjective withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricRegex")
    public String metricRegex;
    public HpoObjective withMetricRegex(String metricRegex) {
        this.metricRegex = metricRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public HpoObjective withType(String type) {
        this.type = type;
        return this;
    }
}