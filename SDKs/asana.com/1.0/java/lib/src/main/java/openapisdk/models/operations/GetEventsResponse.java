package openapisdk.models.operations;



public class GetEventsResponse {
    public String contentType;
    public GetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetEventsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEvents200ApplicationJson getEvents200ApplicationJSONObject;
    public GetEventsResponse withGetEvents200ApplicationJsonObject(GetEvents200ApplicationJson getEvents200ApplicationJSONObject) {
        this.getEvents200ApplicationJSONObject = getEvents200ApplicationJSONObject;
        return this;
    }
}