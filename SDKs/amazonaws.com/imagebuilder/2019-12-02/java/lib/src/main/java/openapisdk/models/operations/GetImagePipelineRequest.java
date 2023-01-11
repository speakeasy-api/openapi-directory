package openapisdk.models.operations;



public class GetImagePipelineRequest {
    public GetImagePipelineQueryParams queryParams;
    public GetImagePipelineRequest withQueryParams(GetImagePipelineQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImagePipelineHeaders headers;
    public GetImagePipelineRequest withHeaders(GetImagePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
}