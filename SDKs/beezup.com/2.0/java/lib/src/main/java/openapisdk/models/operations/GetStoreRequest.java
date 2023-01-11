package openapisdk.models.operations;



public class GetStoreRequest {
    public GetStorePathParams pathParams;
    public GetStoreRequest withPathParams(GetStorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStoreHeaders headers;
    public GetStoreRequest withHeaders(GetStoreHeaders headers) {
        this.headers = headers;
        return this;
    }
}