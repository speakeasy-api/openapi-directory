package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkAclEntryRequest {
    public PostCreateNetworkAclEntryQueryParams queryParams;
    public PostCreateNetworkAclEntryRequest withQueryParams(PostCreateNetworkAclEntryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateNetworkAclEntryHeaders headers;
    public PostCreateNetworkAclEntryRequest withHeaders(PostCreateNetworkAclEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateNetworkAclEntryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}