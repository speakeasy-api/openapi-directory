package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LongColumnStatisticsData
 * Defines column statistics supported for integer data columns.
**/
public class LongColumnStatisticsData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumValue")
    public Long maximumValue;
    public LongColumnStatisticsData withMaximumValue(Long maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumValue")
    public Long minimumValue;
    public LongColumnStatisticsData withMinimumValue(Long minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    }
    @JsonProperty("NumberOfDistinctValues")
    public Long numberOfDistinctValues;
    public LongColumnStatisticsData withNumberOfDistinctValues(Long numberOfDistinctValues) {
        this.numberOfDistinctValues = numberOfDistinctValues;
        return this;
    }
    @JsonProperty("NumberOfNulls")
    public Long numberOfNulls;
    public LongColumnStatisticsData withNumberOfNulls(Long numberOfNulls) {
        this.numberOfNulls = numberOfNulls;
        return this;
    }
}