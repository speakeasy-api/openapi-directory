package openapisdk.models.operations;



public class GetV3VideosRequest {
    public GetV3VideosQueryParams queryParams;
    public GetV3VideosRequest withQueryParams(GetV3VideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3VideosHeaders headers;
    public GetV3VideosRequest withHeaders(GetV3VideosHeaders headers) {
        this.headers = headers;
        return this;
    }
}