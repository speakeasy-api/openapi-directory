package openapisdk.models.operations;



public class GetOrderTaskResponse {
    public String contentType;
    public GetOrderTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderTask orderTask;
    public GetOrderTaskResponse withOrderTask(openapisdk.models.shared.OrderTask orderTask) {
        this.orderTask = orderTask;
        return this;
    }
    public Long statusCode;
    public GetOrderTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}