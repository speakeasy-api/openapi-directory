package openapisdk.models.operations;



public class CreateTagResponse {
    public String contentType;
    public CreateTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateTagResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateTag201ApplicationJson createTag201ApplicationJSONObject;
    public CreateTagResponse withCreateTag201ApplicationJsonObject(CreateTag201ApplicationJson createTag201ApplicationJSONObject) {
        this.createTag201ApplicationJSONObject = createTag201ApplicationJSONObject;
        return this;
    }
}