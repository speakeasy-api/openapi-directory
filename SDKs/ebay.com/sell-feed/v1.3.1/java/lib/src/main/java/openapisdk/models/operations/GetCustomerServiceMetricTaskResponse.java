package openapisdk.models.operations;



public class GetCustomerServiceMetricTaskResponse {
    public String contentType;
    public GetCustomerServiceMetricTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceMetricsTask serviceMetricsTask;
    public GetCustomerServiceMetricTaskResponse withServiceMetricsTask(openapisdk.models.shared.ServiceMetricsTask serviceMetricsTask) {
        this.serviceMetricsTask = serviceMetricsTask;
        return this;
    }
    public Long statusCode;
    public GetCustomerServiceMetricTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}