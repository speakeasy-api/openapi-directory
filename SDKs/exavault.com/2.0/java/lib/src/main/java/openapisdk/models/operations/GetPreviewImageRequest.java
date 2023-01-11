package openapisdk.models.operations;



public class GetPreviewImageRequest {
    public GetPreviewImageQueryParams queryParams;
    public GetPreviewImageRequest withQueryParams(GetPreviewImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPreviewImageHeaders headers;
    public GetPreviewImageRequest withHeaders(GetPreviewImageHeaders headers) {
        this.headers = headers;
        return this;
    }
}