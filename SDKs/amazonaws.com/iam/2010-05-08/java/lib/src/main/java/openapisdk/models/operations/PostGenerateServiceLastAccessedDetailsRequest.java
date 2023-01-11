package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGenerateServiceLastAccessedDetailsRequest {
    public PostGenerateServiceLastAccessedDetailsQueryParams queryParams;
    public PostGenerateServiceLastAccessedDetailsRequest withQueryParams(PostGenerateServiceLastAccessedDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGenerateServiceLastAccessedDetailsHeaders headers;
    public PostGenerateServiceLastAccessedDetailsRequest withHeaders(PostGenerateServiceLastAccessedDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGenerateServiceLastAccessedDetailsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}