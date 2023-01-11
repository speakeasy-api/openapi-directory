package openapisdk.models.operations;



public class AppointmentsListResponse {
    public String contentType;
    public AppointmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppointmentsList200ApplicationJson appointmentsList200ApplicationJSONObject;
    public AppointmentsListResponse withAppointmentsList200ApplicationJsonObject(AppointmentsList200ApplicationJson appointmentsList200ApplicationJSONObject) {
        this.appointmentsList200ApplicationJSONObject = appointmentsList200ApplicationJSONObject;
        return this;
    }
}