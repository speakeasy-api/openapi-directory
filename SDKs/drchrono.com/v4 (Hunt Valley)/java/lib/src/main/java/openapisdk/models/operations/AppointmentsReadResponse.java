package openapisdk.models.operations;



public class AppointmentsReadResponse {
    public openapisdk.models.shared.Appointment appointment;
    public AppointmentsReadResponse withAppointment(openapisdk.models.shared.Appointment appointment) {
        this.appointment = appointment;
        return this;
    }
    public String contentType;
    public AppointmentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}