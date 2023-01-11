package openapisdk.models.operations;



public class GetApiV1NonprofitsShowRequest {
    public GetApiV1NonprofitsShowQueryParams queryParams;
    public GetApiV1NonprofitsShowRequest withQueryParams(GetApiV1NonprofitsShowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiV1NonprofitsShowSecurity security;
    public GetApiV1NonprofitsShowRequest withSecurity(GetApiV1NonprofitsShowSecurity security) {
        this.security = security;
        return this;
    }
}