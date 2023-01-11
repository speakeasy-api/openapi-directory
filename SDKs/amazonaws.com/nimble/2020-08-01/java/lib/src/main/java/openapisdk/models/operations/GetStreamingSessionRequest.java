package openapisdk.models.operations;



public class GetStreamingSessionRequest {
    public GetStreamingSessionPathParams pathParams;
    public GetStreamingSessionRequest withPathParams(GetStreamingSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStreamingSessionHeaders headers;
    public GetStreamingSessionRequest withHeaders(GetStreamingSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
}