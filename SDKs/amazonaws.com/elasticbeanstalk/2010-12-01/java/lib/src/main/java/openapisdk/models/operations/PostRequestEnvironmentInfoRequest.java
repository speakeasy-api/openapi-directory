package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestEnvironmentInfoRequest {
    public PostRequestEnvironmentInfoQueryParams queryParams;
    public PostRequestEnvironmentInfoRequest withQueryParams(PostRequestEnvironmentInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRequestEnvironmentInfoHeaders headers;
    public PostRequestEnvironmentInfoRequest withHeaders(PostRequestEnvironmentInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRequestEnvironmentInfoRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}