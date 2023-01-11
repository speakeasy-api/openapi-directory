package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetRulePrioritiesRequest {
    public PostSetRulePrioritiesQueryParams queryParams;
    public PostSetRulePrioritiesRequest withQueryParams(PostSetRulePrioritiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetRulePrioritiesHeaders headers;
    public PostSetRulePrioritiesRequest withHeaders(PostSetRulePrioritiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetRulePrioritiesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}