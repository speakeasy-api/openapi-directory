package openapisdk.models.operations;



public class AppointmentTemplatesListRequest {
    public AppointmentTemplatesListQueryParams queryParams;
    public AppointmentTemplatesListRequest withQueryParams(AppointmentTemplatesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentTemplatesListSecurity security;
    public AppointmentTemplatesListRequest withSecurity(AppointmentTemplatesListSecurity security) {
        this.security = security;
        return this;
    }
}