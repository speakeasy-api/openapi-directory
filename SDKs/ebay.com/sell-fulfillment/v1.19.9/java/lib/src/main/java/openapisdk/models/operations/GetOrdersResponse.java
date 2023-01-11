package openapisdk.models.operations;



public class GetOrdersResponse {
    public String contentType;
    public GetOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderSearchPagedCollection orderSearchPagedCollection;
    public GetOrdersResponse withOrderSearchPagedCollection(openapisdk.models.shared.OrderSearchPagedCollection orderSearchPagedCollection) {
        this.orderSearchPagedCollection = orderSearchPagedCollection;
        return this;
    }
    public Long statusCode;
    public GetOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}