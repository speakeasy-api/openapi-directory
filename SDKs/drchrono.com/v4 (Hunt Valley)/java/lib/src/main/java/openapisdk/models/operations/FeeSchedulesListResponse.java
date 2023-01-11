package openapisdk.models.operations;



public class FeeSchedulesListResponse {
    public String contentType;
    public FeeSchedulesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FeeSchedulesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public FeeSchedulesList200ApplicationJson feeSchedulesList200ApplicationJSONObject;
    public FeeSchedulesListResponse withFeeSchedulesList200ApplicationJsonObject(FeeSchedulesList200ApplicationJson feeSchedulesList200ApplicationJSONObject) {
        this.feeSchedulesList200ApplicationJSONObject = feeSchedulesList200ApplicationJSONObject;
        return this;
    }
}