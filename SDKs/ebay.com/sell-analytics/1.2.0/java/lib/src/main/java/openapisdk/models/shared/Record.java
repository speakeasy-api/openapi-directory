package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Record
 * Type that defines the fields of the individual record of the report.
**/
public class Record {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionValues")
    public Value[] dimensionValues;
    public Record withDimensionValues(Value[] dimensionValues) {
        this.dimensionValues = dimensionValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricValues")
    public Value[] metricValues;
    public Record withMetricValues(Value[] metricValues) {
        this.metricValues = metricValues;
        return this;
    }
}