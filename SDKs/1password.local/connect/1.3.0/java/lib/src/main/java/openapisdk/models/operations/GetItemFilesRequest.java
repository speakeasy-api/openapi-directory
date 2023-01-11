package openapisdk.models.operations;



public class GetItemFilesRequest {
    public GetItemFilesPathParams pathParams;
    public GetItemFilesRequest withPathParams(GetItemFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetItemFilesQueryParams queryParams;
    public GetItemFilesRequest withQueryParams(GetItemFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetItemFilesSecurity security;
    public GetItemFilesRequest withSecurity(GetItemFilesSecurity security) {
        this.security = security;
        return this;
    }
}