package openapisdk.models.operations;



public class GetCustomerServiceMetricTasksResponse {
    public String contentType;
    public GetCustomerServiceMetricTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerServiceMetricTaskCollection customerServiceMetricTaskCollection;
    public GetCustomerServiceMetricTasksResponse withCustomerServiceMetricTaskCollection(openapisdk.models.shared.CustomerServiceMetricTaskCollection customerServiceMetricTaskCollection) {
        this.customerServiceMetricTaskCollection = customerServiceMetricTaskCollection;
        return this;
    }
    public Long statusCode;
    public GetCustomerServiceMetricTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}