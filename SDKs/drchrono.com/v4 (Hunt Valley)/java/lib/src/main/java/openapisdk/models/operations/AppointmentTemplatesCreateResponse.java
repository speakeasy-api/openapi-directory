package openapisdk.models.operations;



public class AppointmentTemplatesCreateResponse {
    public openapisdk.models.shared.AppointmentTemplate appointmentTemplate;
    public AppointmentTemplatesCreateResponse withAppointmentTemplate(openapisdk.models.shared.AppointmentTemplate appointmentTemplate) {
        this.appointmentTemplate = appointmentTemplate;
        return this;
    }
    public String contentType;
    public AppointmentTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}