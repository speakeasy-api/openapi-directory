package openapisdk.models.operations;



public class GetInputFileRequest {
    public GetInputFilePathParams pathParams;
    public GetInputFileRequest withPathParams(GetInputFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInputFileSecurity security;
    public GetInputFileRequest withSecurity(GetInputFileSecurity security) {
        this.security = security;
        return this;
    }
}