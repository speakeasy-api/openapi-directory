package openapisdk.models.operations;



public class AppointmentsCreateResponse {
    public openapisdk.models.shared.Appointment appointment;
    public AppointmentsCreateResponse withAppointment(openapisdk.models.shared.Appointment appointment) {
        this.appointment = appointment;
        return this;
    }
    public String contentType;
    public AppointmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}