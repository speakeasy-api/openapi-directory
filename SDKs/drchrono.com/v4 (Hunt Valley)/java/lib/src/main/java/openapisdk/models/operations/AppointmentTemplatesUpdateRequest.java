package openapisdk.models.operations;



public class AppointmentTemplatesUpdateRequest {
    public AppointmentTemplatesUpdatePathParams pathParams;
    public AppointmentTemplatesUpdateRequest withPathParams(AppointmentTemplatesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentTemplatesUpdateQueryParams queryParams;
    public AppointmentTemplatesUpdateRequest withQueryParams(AppointmentTemplatesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentTemplatesUpdateSecurity security;
    public AppointmentTemplatesUpdateRequest withSecurity(AppointmentTemplatesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}