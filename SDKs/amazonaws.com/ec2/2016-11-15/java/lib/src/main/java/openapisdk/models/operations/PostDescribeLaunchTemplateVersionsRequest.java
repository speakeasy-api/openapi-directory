package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLaunchTemplateVersionsRequest {
    public PostDescribeLaunchTemplateVersionsQueryParams queryParams;
    public PostDescribeLaunchTemplateVersionsRequest withQueryParams(PostDescribeLaunchTemplateVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLaunchTemplateVersionsHeaders headers;
    public PostDescribeLaunchTemplateVersionsRequest withHeaders(PostDescribeLaunchTemplateVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLaunchTemplateVersionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}