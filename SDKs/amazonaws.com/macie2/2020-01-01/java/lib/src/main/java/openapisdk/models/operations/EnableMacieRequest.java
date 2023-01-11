package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableMacieRequest {
    public EnableMacieHeaders headers;
    public EnableMacieRequest withHeaders(EnableMacieHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnableMacieRequestBody request;
    public EnableMacieRequest withRequest(EnableMacieRequestBody request) {
        this.request = request;
        return this;
    }
}