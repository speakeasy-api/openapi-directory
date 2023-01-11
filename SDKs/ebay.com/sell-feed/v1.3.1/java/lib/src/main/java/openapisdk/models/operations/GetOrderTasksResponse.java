package openapisdk.models.operations;



public class GetOrderTasksResponse {
    public String contentType;
    public GetOrderTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderTaskCollection orderTaskCollection;
    public GetOrderTasksResponse withOrderTaskCollection(openapisdk.models.shared.OrderTaskCollection orderTaskCollection) {
        this.orderTaskCollection = orderTaskCollection;
        return this;
    }
    public Long statusCode;
    public GetOrderTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}