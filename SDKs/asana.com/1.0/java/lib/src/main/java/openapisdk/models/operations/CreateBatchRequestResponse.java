package openapisdk.models.operations;



public class CreateBatchRequestResponse {
    public String contentType;
    public CreateBatchRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateBatchRequestResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateBatchRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateBatchRequest200ApplicationJson createBatchRequest200ApplicationJSONObject;
    public CreateBatchRequestResponse withCreateBatchRequest200ApplicationJsonObject(CreateBatchRequest200ApplicationJson createBatchRequest200ApplicationJSONObject) {
        this.createBatchRequest200ApplicationJSONObject = createBatchRequest200ApplicationJSONObject;
        return this;
    }
}