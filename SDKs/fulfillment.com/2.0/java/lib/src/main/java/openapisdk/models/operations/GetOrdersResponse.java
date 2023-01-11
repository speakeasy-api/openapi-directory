package openapisdk.models.operations;



public class GetOrdersResponse {
    public String contentType;
    public GetOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetOrdersErrorStandardV2 errorStandardV2;
    public GetOrdersResponse withErrorStandardV2(GetOrdersErrorStandardV2 errorStandardV2) {
        this.errorStandardV2 = errorStandardV2;
        return this;
    }
    public Object orderResponseOneOfV2;
    public GetOrdersResponse withOrderResponseOneOfV2(Object orderResponseOneOfV2) {
        this.orderResponseOneOfV2 = orderResponseOneOfV2;
        return this;
    }
    public Long statusCode;
    public GetOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}