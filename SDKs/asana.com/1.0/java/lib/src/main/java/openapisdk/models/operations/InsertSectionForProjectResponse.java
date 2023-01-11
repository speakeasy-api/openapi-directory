package openapisdk.models.operations;



public class InsertSectionForProjectResponse {
    public String contentType;
    public InsertSectionForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public InsertSectionForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public InsertSectionForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public InsertSectionForProject200ApplicationJson insertSectionForProject200ApplicationJSONObject;
    public InsertSectionForProjectResponse withInsertSectionForProject200ApplicationJsonObject(InsertSectionForProject200ApplicationJson insertSectionForProject200ApplicationJSONObject) {
        this.insertSectionForProject200ApplicationJSONObject = insertSectionForProject200ApplicationJSONObject;
        return this;
    }
}