package openapisdk.models.operations;



public class HeadOrderRequest {
    public HeadOrderPathParams pathParams;
    public HeadOrderRequest withPathParams(HeadOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public HeadOrderHeaders headers;
    public HeadOrderRequest withHeaders(HeadOrderHeaders headers) {
        this.headers = headers;
        return this;
    }
}