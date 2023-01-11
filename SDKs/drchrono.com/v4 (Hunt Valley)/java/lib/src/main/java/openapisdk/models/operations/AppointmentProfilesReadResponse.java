package openapisdk.models.operations;



public class AppointmentProfilesReadResponse {
    public openapisdk.models.shared.AppointmentProfile appointmentProfile;
    public AppointmentProfilesReadResponse withAppointmentProfile(openapisdk.models.shared.AppointmentProfile appointmentProfile) {
        this.appointmentProfile = appointmentProfile;
        return this;
    }
    public String contentType;
    public AppointmentProfilesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentProfilesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}