package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dimension
 * The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.
**/
public class Dimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionKey")
    public String dimensionKey;
    public Dimension withDimensionKey(String dimensionKey) {
        this.dimensionKey = dimensionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Dimension withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Dimension withValue(String value) {
        this.value = value;
        return this;
    }
}