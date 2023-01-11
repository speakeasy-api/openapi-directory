package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLaunchTemplateVersionRequest {
    public PostCreateLaunchTemplateVersionQueryParams queryParams;
    public PostCreateLaunchTemplateVersionRequest withQueryParams(PostCreateLaunchTemplateVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLaunchTemplateVersionHeaders headers;
    public PostCreateLaunchTemplateVersionRequest withHeaders(PostCreateLaunchTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLaunchTemplateVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}