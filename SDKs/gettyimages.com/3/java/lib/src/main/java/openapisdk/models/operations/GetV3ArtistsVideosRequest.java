package openapisdk.models.operations;



public class GetV3ArtistsVideosRequest {
    public GetV3ArtistsVideosQueryParams queryParams;
    public GetV3ArtistsVideosRequest withQueryParams(GetV3ArtistsVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3ArtistsVideosHeaders headers;
    public GetV3ArtistsVideosRequest withHeaders(GetV3ArtistsVideosHeaders headers) {
        this.headers = headers;
        return this;
    }
}