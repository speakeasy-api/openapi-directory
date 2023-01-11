package openapisdk.models.operations;



public class GetPrometheusMetricsResponse {
    public String contentType;
    public GetPrometheusMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String getPrometheusMetrics200TextPlainString;
    public GetPrometheusMetricsResponse withGetPrometheusMetrics200TextPlainString(String getPrometheusMetrics200TextPlainString) {
        this.getPrometheusMetrics200TextPlainString = getPrometheusMetrics200TextPlainString;
        return this;
    }
    public Long statusCode;
    public GetPrometheusMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}