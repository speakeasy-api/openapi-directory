package openapisdk.models.operations;



public class CustomAppointmentFieldsListRequest {
    public CustomAppointmentFieldsListQueryParams queryParams;
    public CustomAppointmentFieldsListRequest withQueryParams(CustomAppointmentFieldsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomAppointmentFieldsListSecurity security;
    public CustomAppointmentFieldsListRequest withSecurity(CustomAppointmentFieldsListSecurity security) {
        this.security = security;
        return this;
    }
}