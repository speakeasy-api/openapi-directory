package openapisdk.models.operations;



public class GetSectionResponse {
    public String contentType;
    public GetSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetSectionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSection200ApplicationJson getSection200ApplicationJSONObject;
    public GetSectionResponse withGetSection200ApplicationJsonObject(GetSection200ApplicationJson getSection200ApplicationJSONObject) {
        this.getSection200ApplicationJSONObject = getSection200ApplicationJSONObject;
        return this;
    }
}