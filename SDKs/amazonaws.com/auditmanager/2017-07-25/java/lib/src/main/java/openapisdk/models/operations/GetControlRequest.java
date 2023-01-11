package openapisdk.models.operations;



public class GetControlRequest {
    public GetControlPathParams pathParams;
    public GetControlRequest withPathParams(GetControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetControlHeaders headers;
    public GetControlRequest withHeaders(GetControlHeaders headers) {
        this.headers = headers;
        return this;
    }
}