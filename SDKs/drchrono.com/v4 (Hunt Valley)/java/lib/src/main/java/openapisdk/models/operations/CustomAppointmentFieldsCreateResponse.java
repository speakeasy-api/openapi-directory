package openapisdk.models.operations;



public class CustomAppointmentFieldsCreateResponse {
    public String contentType;
    public CustomAppointmentFieldsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomAppointmentFieldType customAppointmentFieldType;
    public CustomAppointmentFieldsCreateResponse withCustomAppointmentFieldType(openapisdk.models.shared.CustomAppointmentFieldType customAppointmentFieldType) {
        this.customAppointmentFieldType = customAppointmentFieldType;
        return this;
    }
    public Long statusCode;
    public CustomAppointmentFieldsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}