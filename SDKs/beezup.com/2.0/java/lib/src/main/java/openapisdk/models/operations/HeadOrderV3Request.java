package openapisdk.models.operations;



public class HeadOrderV3Request {
    public HeadOrderV3PathParams pathParams;
    public HeadOrderV3Request withPathParams(HeadOrderV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public HeadOrderV3Headers headers;
    public HeadOrderV3Request withHeaders(HeadOrderV3Headers headers) {
        this.headers = headers;
        return this;
    }
}