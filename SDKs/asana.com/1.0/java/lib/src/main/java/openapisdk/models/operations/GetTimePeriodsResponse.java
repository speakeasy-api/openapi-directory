package openapisdk.models.operations;



public class GetTimePeriodsResponse {
    public String contentType;
    public GetTimePeriodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTimePeriodsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTimePeriodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTimePeriods200ApplicationJson getTimePeriods200ApplicationJSONObject;
    public GetTimePeriodsResponse withGetTimePeriods200ApplicationJsonObject(GetTimePeriods200ApplicationJson getTimePeriods200ApplicationJSONObject) {
        this.getTimePeriods200ApplicationJSONObject = getTimePeriods200ApplicationJSONObject;
        return this;
    }
}