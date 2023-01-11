package openapisdk.models.operations;



public class GetApiV1NonprofitsListRequest {
    public GetApiV1NonprofitsListQueryParams queryParams;
    public GetApiV1NonprofitsListRequest withQueryParams(GetApiV1NonprofitsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiV1NonprofitsListSecurity security;
    public GetApiV1NonprofitsListRequest withSecurity(GetApiV1NonprofitsListSecurity security) {
        this.security = security;
        return this;
    }
}