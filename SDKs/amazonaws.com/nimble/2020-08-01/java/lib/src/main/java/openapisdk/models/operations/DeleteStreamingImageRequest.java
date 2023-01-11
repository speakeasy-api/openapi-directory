package openapisdk.models.operations;



public class DeleteStreamingImageRequest {
    public DeleteStreamingImagePathParams pathParams;
    public DeleteStreamingImageRequest withPathParams(DeleteStreamingImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteStreamingImageHeaders headers;
    public DeleteStreamingImageRequest withHeaders(DeleteStreamingImageHeaders headers) {
        this.headers = headers;
        return this;
    }
}