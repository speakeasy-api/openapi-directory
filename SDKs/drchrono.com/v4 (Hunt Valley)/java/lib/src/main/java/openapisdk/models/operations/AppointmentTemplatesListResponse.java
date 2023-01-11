package openapisdk.models.operations;



public class AppointmentTemplatesListResponse {
    public String contentType;
    public AppointmentTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppointmentTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppointmentTemplatesList200ApplicationJson appointmentTemplatesList200ApplicationJSONObject;
    public AppointmentTemplatesListResponse withAppointmentTemplatesList200ApplicationJsonObject(AppointmentTemplatesList200ApplicationJson appointmentTemplatesList200ApplicationJSONObject) {
        this.appointmentTemplatesList200ApplicationJSONObject = appointmentTemplatesList200ApplicationJSONObject;
        return this;
    }
}