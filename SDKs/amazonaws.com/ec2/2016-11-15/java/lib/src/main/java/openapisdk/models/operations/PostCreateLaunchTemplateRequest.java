package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLaunchTemplateRequest {
    public PostCreateLaunchTemplateQueryParams queryParams;
    public PostCreateLaunchTemplateRequest withQueryParams(PostCreateLaunchTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLaunchTemplateHeaders headers;
    public PostCreateLaunchTemplateRequest withHeaders(PostCreateLaunchTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLaunchTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}