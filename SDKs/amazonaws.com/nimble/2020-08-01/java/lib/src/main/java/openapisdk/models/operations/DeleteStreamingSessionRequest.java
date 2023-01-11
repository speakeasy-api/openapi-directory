package openapisdk.models.operations;



public class DeleteStreamingSessionRequest {
    public DeleteStreamingSessionPathParams pathParams;
    public DeleteStreamingSessionRequest withPathParams(DeleteStreamingSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteStreamingSessionHeaders headers;
    public DeleteStreamingSessionRequest withHeaders(DeleteStreamingSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
}