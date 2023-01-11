package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Header
 * Type that defines the headers for the dimension keys and metrics returned in the report.
**/
public class Header {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionKeys")
    public Definition[] dimensionKeys;
    public Header withDimensionKeys(Definition[] dimensionKeys) {
        this.dimensionKeys = dimensionKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Definition[] metrics;
    public Header withMetrics(Definition[] metrics) {
        this.metrics = metrics;
        return this;
    }
}