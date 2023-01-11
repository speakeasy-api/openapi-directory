package openapisdk.models.operations;



public class AppointmentTemplatesReadResponse {
    public openapisdk.models.shared.AppointmentTemplate appointmentTemplate;
    public AppointmentTemplatesReadResponse withAppointmentTemplate(openapisdk.models.shared.AppointmentTemplate appointmentTemplate) {
        this.appointmentTemplate = appointmentTemplate;
        return this;
    }
    public String contentType;
    public AppointmentTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}