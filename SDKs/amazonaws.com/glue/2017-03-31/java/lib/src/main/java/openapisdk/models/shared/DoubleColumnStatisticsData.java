package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleColumnStatisticsData
 * Defines column statistics supported for floating-point number data columns.
**/
public class DoubleColumnStatisticsData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumValue")
    public Double maximumValue;
    public DoubleColumnStatisticsData withMaximumValue(Double maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumValue")
    public Double minimumValue;
    public DoubleColumnStatisticsData withMinimumValue(Double minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    }
    @JsonProperty("NumberOfDistinctValues")
    public Long numberOfDistinctValues;
    public DoubleColumnStatisticsData withNumberOfDistinctValues(Long numberOfDistinctValues) {
        this.numberOfDistinctValues = numberOfDistinctValues;
        return this;
    }
    @JsonProperty("NumberOfNulls")
    public Long numberOfNulls;
    public DoubleColumnStatisticsData withNumberOfNulls(Long numberOfNulls) {
        this.numberOfNulls = numberOfNulls;
        return this;
    }
}