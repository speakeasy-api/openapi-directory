package openapisdk.models.operations;



public class GetRawMessageContentRequest {
    public GetRawMessageContentPathParams pathParams;
    public GetRawMessageContentRequest withPathParams(GetRawMessageContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRawMessageContentHeaders headers;
    public GetRawMessageContentRequest withHeaders(GetRawMessageContentHeaders headers) {
        this.headers = headers;
        return this;
    }
}