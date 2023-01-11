package openapisdk.models.operations;



public class FeeSchedulesListRequest {
    public FeeSchedulesListQueryParams queryParams;
    public FeeSchedulesListRequest withQueryParams(FeeSchedulesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FeeSchedulesListSecurity security;
    public FeeSchedulesListRequest withSecurity(FeeSchedulesListSecurity security) {
        this.security = security;
        return this;
    }
}