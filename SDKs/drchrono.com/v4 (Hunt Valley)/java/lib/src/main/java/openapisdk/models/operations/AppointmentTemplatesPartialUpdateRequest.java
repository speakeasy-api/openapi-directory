package openapisdk.models.operations;



public class AppointmentTemplatesPartialUpdateRequest {
    public AppointmentTemplatesPartialUpdatePathParams pathParams;
    public AppointmentTemplatesPartialUpdateRequest withPathParams(AppointmentTemplatesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentTemplatesPartialUpdateQueryParams queryParams;
    public AppointmentTemplatesPartialUpdateRequest withQueryParams(AppointmentTemplatesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentTemplatesPartialUpdateSecurity security;
    public AppointmentTemplatesPartialUpdateRequest withSecurity(AppointmentTemplatesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}