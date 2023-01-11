package openapisdk.models.operations;



public class GetObjectRequest {
    public GetObjectPathParams pathParams;
    public GetObjectRequest withPathParams(GetObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetObjectHeaders headers;
    public GetObjectRequest withHeaders(GetObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
}