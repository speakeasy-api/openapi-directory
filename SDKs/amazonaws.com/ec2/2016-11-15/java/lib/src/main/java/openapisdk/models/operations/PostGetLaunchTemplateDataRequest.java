package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetLaunchTemplateDataRequest {
    public PostGetLaunchTemplateDataQueryParams queryParams;
    public PostGetLaunchTemplateDataRequest withQueryParams(PostGetLaunchTemplateDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetLaunchTemplateDataHeaders headers;
    public PostGetLaunchTemplateDataRequest withHeaders(PostGetLaunchTemplateDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetLaunchTemplateDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}