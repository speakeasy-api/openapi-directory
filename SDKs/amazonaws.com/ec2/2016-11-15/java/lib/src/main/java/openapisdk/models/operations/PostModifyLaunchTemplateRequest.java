package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyLaunchTemplateRequest {
    public PostModifyLaunchTemplateQueryParams queryParams;
    public PostModifyLaunchTemplateRequest withQueryParams(PostModifyLaunchTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyLaunchTemplateHeaders headers;
    public PostModifyLaunchTemplateRequest withHeaders(PostModifyLaunchTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyLaunchTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}