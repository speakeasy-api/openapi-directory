package openapisdk.models.operations;



public class PatientsQrda1Request {
    public PatientsQrda1PathParams pathParams;
    public PatientsQrda1Request withPathParams(PatientsQrda1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsQrda1QueryParams queryParams;
    public PatientsQrda1Request withQueryParams(PatientsQrda1QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsQrda1Security security;
    public PatientsQrda1Request withSecurity(PatientsQrda1Security security) {
        this.security = security;
        return this;
    }
}