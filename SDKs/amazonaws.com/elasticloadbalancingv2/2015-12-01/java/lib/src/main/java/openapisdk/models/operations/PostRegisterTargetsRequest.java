package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterTargetsRequest {
    public PostRegisterTargetsQueryParams queryParams;
    public PostRegisterTargetsRequest withQueryParams(PostRegisterTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRegisterTargetsHeaders headers;
    public PostRegisterTargetsRequest withHeaders(PostRegisterTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRegisterTargetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}