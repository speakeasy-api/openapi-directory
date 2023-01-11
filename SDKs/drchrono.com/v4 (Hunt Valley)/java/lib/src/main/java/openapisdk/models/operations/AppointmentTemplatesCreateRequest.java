package openapisdk.models.operations;



public class AppointmentTemplatesCreateRequest {
    public AppointmentTemplatesCreateQueryParams queryParams;
    public AppointmentTemplatesCreateRequest withQueryParams(AppointmentTemplatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentTemplatesCreateSecurity security;
    public AppointmentTemplatesCreateRequest withSecurity(AppointmentTemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}