package openapisdk.models.operations;



public class CustomAppointmentFieldsReadResponse {
    public String contentType;
    public CustomAppointmentFieldsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomAppointmentFieldType customAppointmentFieldType;
    public CustomAppointmentFieldsReadResponse withCustomAppointmentFieldType(openapisdk.models.shared.CustomAppointmentFieldType customAppointmentFieldType) {
        this.customAppointmentFieldType = customAppointmentFieldType;
        return this;
    }
    public Long statusCode;
    public CustomAppointmentFieldsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}