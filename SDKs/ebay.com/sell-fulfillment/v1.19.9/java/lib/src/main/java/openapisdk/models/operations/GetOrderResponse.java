package openapisdk.models.operations;



public class GetOrderResponse {
    public String contentType;
    public GetOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Order order;
    public GetOrderResponse withOrder(openapisdk.models.shared.Order order) {
        this.order = order;
        return this;
    }
    public Long statusCode;
    public GetOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}