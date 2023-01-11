package openapisdk.models.operations;



public class AppointmentTemplatesDeleteRequest {
    public AppointmentTemplatesDeletePathParams pathParams;
    public AppointmentTemplatesDeleteRequest withPathParams(AppointmentTemplatesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentTemplatesDeleteQueryParams queryParams;
    public AppointmentTemplatesDeleteRequest withQueryParams(AppointmentTemplatesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentTemplatesDeleteSecurity security;
    public AppointmentTemplatesDeleteRequest withSecurity(AppointmentTemplatesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}