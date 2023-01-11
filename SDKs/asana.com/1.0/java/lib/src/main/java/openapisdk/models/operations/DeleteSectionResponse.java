package openapisdk.models.operations;



public class DeleteSectionResponse {
    public String contentType;
    public DeleteSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteSectionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteSection200ApplicationJson deleteSection200ApplicationJSONObject;
    public DeleteSectionResponse withDeleteSection200ApplicationJsonObject(DeleteSection200ApplicationJson deleteSection200ApplicationJSONObject) {
        this.deleteSection200ApplicationJSONObject = deleteSection200ApplicationJSONObject;
        return this;
    }
}