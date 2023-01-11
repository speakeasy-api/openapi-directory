package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSimulateCustomPolicyRequest {
    public PostSimulateCustomPolicyQueryParams queryParams;
    public PostSimulateCustomPolicyRequest withQueryParams(PostSimulateCustomPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSimulateCustomPolicyHeaders headers;
    public PostSimulateCustomPolicyRequest withHeaders(PostSimulateCustomPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSimulateCustomPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}