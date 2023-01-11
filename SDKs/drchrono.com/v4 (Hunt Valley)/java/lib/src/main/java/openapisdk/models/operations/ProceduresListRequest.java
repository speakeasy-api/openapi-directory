package openapisdk.models.operations;



public class ProceduresListRequest {
    public ProceduresListQueryParams queryParams;
    public ProceduresListRequest withQueryParams(ProceduresListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProceduresListSecurity security;
    public ProceduresListRequest withSecurity(ProceduresListSecurity security) {
        this.security = security;
        return this;
    }
}