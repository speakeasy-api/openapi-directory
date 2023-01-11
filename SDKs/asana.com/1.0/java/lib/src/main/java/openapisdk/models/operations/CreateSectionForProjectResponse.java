package openapisdk.models.operations;



public class CreateSectionForProjectResponse {
    public String contentType;
    public CreateSectionForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateSectionForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateSectionForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateSectionForProject201ApplicationJson createSectionForProject201ApplicationJSONObject;
    public CreateSectionForProjectResponse withCreateSectionForProject201ApplicationJsonObject(CreateSectionForProject201ApplicationJson createSectionForProject201ApplicationJSONObject) {
        this.createSectionForProject201ApplicationJSONObject = createSectionForProject201ApplicationJSONObject;
        return this;
    }
}