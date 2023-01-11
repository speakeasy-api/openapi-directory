package openapisdk.models.operations;



public class AppointmentProfilesListResponse {
    public String contentType;
    public AppointmentProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppointmentProfilesList200ApplicationJson appointmentProfilesList200ApplicationJSONObject;
    public AppointmentProfilesListResponse withAppointmentProfilesList200ApplicationJsonObject(AppointmentProfilesList200ApplicationJson appointmentProfilesList200ApplicationJSONObject) {
        this.appointmentProfilesList200ApplicationJSONObject = appointmentProfilesList200ApplicationJSONObject;
        return this;
    }
}