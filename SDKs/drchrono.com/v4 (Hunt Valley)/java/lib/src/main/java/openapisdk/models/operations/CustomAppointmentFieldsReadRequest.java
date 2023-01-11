package openapisdk.models.operations;



public class CustomAppointmentFieldsReadRequest {
    public CustomAppointmentFieldsReadPathParams pathParams;
    public CustomAppointmentFieldsReadRequest withPathParams(CustomAppointmentFieldsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomAppointmentFieldsReadQueryParams queryParams;
    public CustomAppointmentFieldsReadRequest withQueryParams(CustomAppointmentFieldsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomAppointmentFieldsReadSecurity security;
    public CustomAppointmentFieldsReadRequest withSecurity(CustomAppointmentFieldsReadSecurity security) {
        this.security = security;
        return this;
    }
}