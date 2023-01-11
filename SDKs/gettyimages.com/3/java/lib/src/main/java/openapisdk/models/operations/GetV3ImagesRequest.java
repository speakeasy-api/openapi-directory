package openapisdk.models.operations;



public class GetV3ImagesRequest {
    public GetV3ImagesQueryParams queryParams;
    public GetV3ImagesRequest withQueryParams(GetV3ImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3ImagesHeaders headers;
    public GetV3ImagesRequest withHeaders(GetV3ImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
}