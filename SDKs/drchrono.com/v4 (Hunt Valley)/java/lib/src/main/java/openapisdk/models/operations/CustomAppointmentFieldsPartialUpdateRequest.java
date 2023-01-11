package openapisdk.models.operations;



public class CustomAppointmentFieldsPartialUpdateRequest {
    public CustomAppointmentFieldsPartialUpdatePathParams pathParams;
    public CustomAppointmentFieldsPartialUpdateRequest withPathParams(CustomAppointmentFieldsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomAppointmentFieldsPartialUpdateQueryParams queryParams;
    public CustomAppointmentFieldsPartialUpdateRequest withQueryParams(CustomAppointmentFieldsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomAppointmentFieldsPartialUpdateSecurity security;
    public CustomAppointmentFieldsPartialUpdateRequest withSecurity(CustomAppointmentFieldsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}