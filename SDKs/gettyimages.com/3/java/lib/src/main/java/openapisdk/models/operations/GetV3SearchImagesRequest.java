package openapisdk.models.operations;



public class GetV3SearchImagesRequest {
    public GetV3SearchImagesQueryParams queryParams;
    public GetV3SearchImagesRequest withQueryParams(GetV3SearchImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV3SearchImagesHeaders headers;
    public GetV3SearchImagesRequest withHeaders(GetV3SearchImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
}