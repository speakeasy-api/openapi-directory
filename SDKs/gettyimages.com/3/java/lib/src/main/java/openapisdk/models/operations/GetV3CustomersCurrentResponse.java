package openapisdk.models.operations;



public class GetV3CustomersCurrentResponse {
    public String contentType;
    public GetV3CustomersCurrentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomerInfoResponse customerInfoResponse;
    public GetV3CustomersCurrentResponse withCustomerInfoResponse(openapisdk.models.shared.CustomerInfoResponse customerInfoResponse) {
        this.customerInfoResponse = customerInfoResponse;
        return this;
    }
    public Long statusCode;
    public GetV3CustomersCurrentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}