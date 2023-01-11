package openapisdk.models.operations;



public class GetJobResponse {
    public String contentType;
    public GetJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetJobResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetJob200ApplicationJson getJob200ApplicationJSONObject;
    public GetJobResponse withGetJob200ApplicationJsonObject(GetJob200ApplicationJson getJob200ApplicationJSONObject) {
        this.getJob200ApplicationJSONObject = getJob200ApplicationJSONObject;
        return this;
    }
}