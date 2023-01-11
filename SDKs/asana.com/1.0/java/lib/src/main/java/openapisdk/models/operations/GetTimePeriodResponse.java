package openapisdk.models.operations;



public class GetTimePeriodResponse {
    public String contentType;
    public GetTimePeriodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTimePeriodResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTimePeriodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTimePeriod200ApplicationJson getTimePeriod200ApplicationJSONObject;
    public GetTimePeriodResponse withGetTimePeriod200ApplicationJsonObject(GetTimePeriod200ApplicationJson getTimePeriod200ApplicationJSONObject) {
        this.getTimePeriod200ApplicationJSONObject = getTimePeriod200ApplicationJSONObject;
        return this;
    }
}