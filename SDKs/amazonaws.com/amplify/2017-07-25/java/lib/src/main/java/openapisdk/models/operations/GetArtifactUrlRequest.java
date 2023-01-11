package openapisdk.models.operations;



public class GetArtifactUrlRequest {
    public GetArtifactUrlPathParams pathParams;
    public GetArtifactUrlRequest withPathParams(GetArtifactUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetArtifactUrlHeaders headers;
    public GetArtifactUrlRequest withHeaders(GetArtifactUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
}