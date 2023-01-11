package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLaunchTemplateVersionsRequest {
    public PostDeleteLaunchTemplateVersionsQueryParams queryParams;
    public PostDeleteLaunchTemplateVersionsRequest withQueryParams(PostDeleteLaunchTemplateVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLaunchTemplateVersionsHeaders headers;
    public PostDeleteLaunchTemplateVersionsRequest withHeaders(PostDeleteLaunchTemplateVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLaunchTemplateVersionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}