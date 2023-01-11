package openapisdk.models.operations;



public class AmendmentsListRequest {
    public AmendmentsListQueryParams queryParams;
    public AmendmentsListRequest withQueryParams(AmendmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AmendmentsListSecurity security;
    public AmendmentsListRequest withSecurity(AmendmentsListSecurity security) {
        this.security = security;
        return this;
    }
}