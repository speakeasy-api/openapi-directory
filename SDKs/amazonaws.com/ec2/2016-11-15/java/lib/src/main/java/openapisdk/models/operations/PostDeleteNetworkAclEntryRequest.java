package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkAclEntryRequest {
    public PostDeleteNetworkAclEntryQueryParams queryParams;
    public PostDeleteNetworkAclEntryRequest withQueryParams(PostDeleteNetworkAclEntryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteNetworkAclEntryHeaders headers;
    public PostDeleteNetworkAclEntryRequest withHeaders(PostDeleteNetworkAclEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteNetworkAclEntryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}