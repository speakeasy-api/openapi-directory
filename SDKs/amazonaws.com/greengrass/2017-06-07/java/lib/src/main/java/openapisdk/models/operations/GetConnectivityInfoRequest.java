package openapisdk.models.operations;



public class GetConnectivityInfoRequest {
    public GetConnectivityInfoPathParams pathParams;
    public GetConnectivityInfoRequest withPathParams(GetConnectivityInfoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConnectivityInfoHeaders headers;
    public GetConnectivityInfoRequest withHeaders(GetConnectivityInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
}