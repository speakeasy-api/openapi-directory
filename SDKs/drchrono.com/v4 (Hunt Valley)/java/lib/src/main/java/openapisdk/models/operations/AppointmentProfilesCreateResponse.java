package openapisdk.models.operations;



public class AppointmentProfilesCreateResponse {
    public openapisdk.models.shared.AppointmentProfile appointmentProfile;
    public AppointmentProfilesCreateResponse withAppointmentProfile(openapisdk.models.shared.AppointmentProfile appointmentProfile) {
        this.appointmentProfile = appointmentProfile;
        return this;
    }
    public String contentType;
    public AppointmentProfilesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentProfilesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}