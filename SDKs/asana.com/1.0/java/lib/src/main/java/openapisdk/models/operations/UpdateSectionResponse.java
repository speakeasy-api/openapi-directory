package openapisdk.models.operations;



public class UpdateSectionResponse {
    public String contentType;
    public UpdateSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateSectionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateSection200ApplicationJson updateSection200ApplicationJSONObject;
    public UpdateSectionResponse withUpdateSection200ApplicationJsonObject(UpdateSection200ApplicationJson updateSection200ApplicationJSONObject) {
        this.updateSection200ApplicationJSONObject = updateSection200ApplicationJSONObject;
        return this;
    }
}