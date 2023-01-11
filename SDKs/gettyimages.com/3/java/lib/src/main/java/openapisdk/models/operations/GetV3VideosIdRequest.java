package openapisdk.models.operations;



public class GetV3VideosIdRequest {
    public GetV3VideosIdPathParams pathParams;
    public GetV3VideosIdRequest withPathParams(GetV3VideosIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetV3VideosIdQueryParams queryParams;
    public GetV3VideosIdRequest withQueryParams(GetV3VideosIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3VideosIdHeaders headers;
    public GetV3VideosIdRequest withHeaders(GetV3VideosIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}