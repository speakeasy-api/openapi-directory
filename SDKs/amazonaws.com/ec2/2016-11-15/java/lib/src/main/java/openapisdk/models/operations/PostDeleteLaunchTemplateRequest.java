package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLaunchTemplateRequest {
    public PostDeleteLaunchTemplateQueryParams queryParams;
    public PostDeleteLaunchTemplateRequest withQueryParams(PostDeleteLaunchTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLaunchTemplateHeaders headers;
    public PostDeleteLaunchTemplateRequest withHeaders(PostDeleteLaunchTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLaunchTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}