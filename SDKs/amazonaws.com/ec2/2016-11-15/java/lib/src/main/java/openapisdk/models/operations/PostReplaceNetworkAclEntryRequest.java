package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceNetworkAclEntryRequest {
    public PostReplaceNetworkAclEntryQueryParams queryParams;
    public PostReplaceNetworkAclEntryRequest withQueryParams(PostReplaceNetworkAclEntryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReplaceNetworkAclEntryHeaders headers;
    public PostReplaceNetworkAclEntryRequest withHeaders(PostReplaceNetworkAclEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReplaceNetworkAclEntryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}