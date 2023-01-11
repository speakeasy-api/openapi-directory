package openapisdk.models.operations;



public class GetDetailsOfFileByIdRequest {
    public GetDetailsOfFileByIdPathParams pathParams;
    public GetDetailsOfFileByIdRequest withPathParams(GetDetailsOfFileByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDetailsOfFileByIdQueryParams queryParams;
    public GetDetailsOfFileByIdRequest withQueryParams(GetDetailsOfFileByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDetailsOfFileByIdSecurity security;
    public GetDetailsOfFileByIdRequest withSecurity(GetDetailsOfFileByIdSecurity security) {
        this.security = security;
        return this;
    }
}