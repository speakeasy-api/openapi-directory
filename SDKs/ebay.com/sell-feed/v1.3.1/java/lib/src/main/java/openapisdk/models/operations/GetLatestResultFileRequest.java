package openapisdk.models.operations;



public class GetLatestResultFileRequest {
    public GetLatestResultFilePathParams pathParams;
    public GetLatestResultFileRequest withPathParams(GetLatestResultFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLatestResultFileSecurity security;
    public GetLatestResultFileRequest withSecurity(GetLatestResultFileSecurity security) {
        this.security = security;
        return this;
    }
}