package openapisdk.models.operations;



public class GetApplicationRequest {
    public GetApplicationPathParams pathParams;
    public GetApplicationRequest withPathParams(GetApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetApplicationHeaders headers;
    public GetApplicationRequest withHeaders(GetApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
}