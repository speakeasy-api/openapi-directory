package openapisdk.models.operations;



public class CreateScheduleResponse {
    public String contentType;
    public CreateScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateScheduleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> createSchedule201ApplicationJSONObject;
    public CreateScheduleResponse withCreateSchedule201ApplicationJsonObject(java.util.Map<String, Object> createSchedule201ApplicationJSONObject) {
        this.createSchedule201ApplicationJSONObject = createSchedule201ApplicationJSONObject;
        return this;
    }
}