package openapisdk.models.operations;



public class PostVolumesCreateRequest {
    public PostVolumesCreateQueryParams queryParams;
    public PostVolumesCreateRequest withQueryParams(PostVolumesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostVolumesCreateHeaders headers;
    public PostVolumesCreateRequest withHeaders(PostVolumesCreateHeaders headers) {
        this.headers = headers;
        return this;
    }
}