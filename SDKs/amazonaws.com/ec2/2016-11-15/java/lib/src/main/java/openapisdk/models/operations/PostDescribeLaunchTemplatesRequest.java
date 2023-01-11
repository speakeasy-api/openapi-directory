package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLaunchTemplatesRequest {
    public PostDescribeLaunchTemplatesQueryParams queryParams;
    public PostDescribeLaunchTemplatesRequest withQueryParams(PostDescribeLaunchTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLaunchTemplatesHeaders headers;
    public PostDescribeLaunchTemplatesRequest withHeaders(PostDescribeLaunchTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLaunchTemplatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}