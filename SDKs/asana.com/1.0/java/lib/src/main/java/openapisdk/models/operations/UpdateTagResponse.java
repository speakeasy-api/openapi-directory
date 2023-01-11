package openapisdk.models.operations;



public class UpdateTagResponse {
    public String contentType;
    public UpdateTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateTagResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateTag200ApplicationJson updateTag200ApplicationJSONObject;
    public UpdateTagResponse withUpdateTag200ApplicationJsonObject(UpdateTag200ApplicationJson updateTag200ApplicationJSONObject) {
        this.updateTag200ApplicationJSONObject = updateTag200ApplicationJSONObject;
        return this;
    }
}