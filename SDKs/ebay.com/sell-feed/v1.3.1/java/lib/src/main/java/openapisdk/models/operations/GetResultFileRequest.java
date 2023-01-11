package openapisdk.models.operations;



public class GetResultFileRequest {
    public GetResultFilePathParams pathParams;
    public GetResultFileRequest withPathParams(GetResultFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetResultFileSecurity security;
    public GetResultFileRequest withSecurity(GetResultFileSecurity security) {
        this.security = security;
        return this;
    }
}