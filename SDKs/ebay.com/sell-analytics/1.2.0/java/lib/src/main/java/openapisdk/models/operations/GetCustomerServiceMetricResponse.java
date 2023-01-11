package openapisdk.models.operations;



public class GetCustomerServiceMetricResponse {
    public String contentType;
    public GetCustomerServiceMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCustomerServiceMetricResponse getCustomerServiceMetricResponse;
    public GetCustomerServiceMetricResponse withGetCustomerServiceMetricResponse(openapisdk.models.shared.GetCustomerServiceMetricResponse getCustomerServiceMetricResponse) {
        this.getCustomerServiceMetricResponse = getCustomerServiceMetricResponse;
        return this;
    }
    public Long statusCode;
    public GetCustomerServiceMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}