package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportMetadata
 * This type defines the fields included in the report.
**/
public class ReportMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionMetadata")
    public DimensionMetadata[] dimensionMetadata;
    public ReportMetadata withDimensionMetadata(DimensionMetadata[] dimensionMetadata) {
        this.dimensionMetadata = dimensionMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNumberOfDimensionsToRequest")
    public Integer maxNumberOfDimensionsToRequest;
    public ReportMetadata withMaxNumberOfDimensionsToRequest(Integer maxNumberOfDimensionsToRequest) {
        this.maxNumberOfDimensionsToRequest = maxNumberOfDimensionsToRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNumberOfMetricsToRequest")
    public Integer maxNumberOfMetricsToRequest;
    public ReportMetadata withMaxNumberOfMetricsToRequest(Integer maxNumberOfMetricsToRequest) {
        this.maxNumberOfMetricsToRequest = maxNumberOfMetricsToRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricMetadata")
    public MetricMetadata[] metricMetadata;
    public ReportMetadata withMetricMetadata(MetricMetadata[] metricMetadata) {
        this.metricMetadata = metricMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportType")
    public String reportType;
    public ReportMetadata withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
}