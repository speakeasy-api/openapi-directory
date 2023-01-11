package openapisdk.models.operations;



public class CustomAppointmentFieldsListResponse {
    public String contentType;
    public CustomAppointmentFieldsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CustomAppointmentFieldsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CustomAppointmentFieldsList200ApplicationJson customAppointmentFieldsList200ApplicationJSONObject;
    public CustomAppointmentFieldsListResponse withCustomAppointmentFieldsList200ApplicationJsonObject(CustomAppointmentFieldsList200ApplicationJson customAppointmentFieldsList200ApplicationJSONObject) {
        this.customAppointmentFieldsList200ApplicationJSONObject = customAppointmentFieldsList200ApplicationJSONObject;
        return this;
    }
}