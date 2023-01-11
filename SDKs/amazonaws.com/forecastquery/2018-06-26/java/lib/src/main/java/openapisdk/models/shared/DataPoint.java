package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataPoint
 * The forecast value for a specific date. Part of the <a>Forecast</a> object.
**/
public class DataPoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timestamp")
    public String timestamp;
    public DataPoint withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Double value;
    public DataPoint withValue(Double value) {
        this.value = value;
        return this;
    }
}