package openapisdk.models.operations;



public class DeleteTagResponse {
    public String contentType;
    public DeleteTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteTagResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteTag200ApplicationJson deleteTag200ApplicationJSONObject;
    public DeleteTagResponse withDeleteTag200ApplicationJsonObject(DeleteTag200ApplicationJson deleteTag200ApplicationJSONObject) {
        this.deleteTag200ApplicationJSONObject = deleteTag200ApplicationJSONObject;
        return this;
    }
}