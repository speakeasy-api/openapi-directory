package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TimeSeries
 * Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.
**/
public class TimeSeries {
    @JsonProperty("DimensionList")
    public DimensionNameValue[] dimensionList;
    public TimeSeries withDimensionList(DimensionNameValue[] dimensionList) {
        this.dimensionList = dimensionList;
        return this;
    }
    @JsonProperty("MetricValueList")
    public Double[] metricValueList;
    public TimeSeries withMetricValueList(Double[] metricValueList) {
        this.metricValueList = metricValueList;
        return this;
    }
    @JsonProperty("TimeSeriesId")
    public String timeSeriesId;
    public TimeSeries withTimeSeriesId(String timeSeriesId) {
        this.timeSeriesId = timeSeriesId;
        return this;
    }
}