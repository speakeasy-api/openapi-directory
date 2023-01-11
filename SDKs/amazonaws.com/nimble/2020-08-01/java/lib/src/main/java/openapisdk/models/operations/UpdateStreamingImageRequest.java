package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamingImageRequest {
    public UpdateStreamingImagePathParams pathParams;
    public UpdateStreamingImageRequest withPathParams(UpdateStreamingImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStreamingImageHeaders headers;
    public UpdateStreamingImageRequest withHeaders(UpdateStreamingImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateStreamingImageRequestBody request;
    public UpdateStreamingImageRequest withRequest(UpdateStreamingImageRequestBody request) {
        this.request = request;
        return this;
    }
}