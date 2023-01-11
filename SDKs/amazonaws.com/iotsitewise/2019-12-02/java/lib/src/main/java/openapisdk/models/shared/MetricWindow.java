package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricWindow
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
**/
public class MetricWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tumbling")
    public TumblingWindow tumbling;
    public MetricWindow withTumbling(TumblingWindow tumbling) {
        this.tumbling = tumbling;
        return this;
    }
}