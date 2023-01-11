package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAssociatedIpv6PoolCidrsRequest {
    public PostGetAssociatedIpv6PoolCidrsQueryParams queryParams;
    public PostGetAssociatedIpv6PoolCidrsRequest withQueryParams(PostGetAssociatedIpv6PoolCidrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetAssociatedIpv6PoolCidrsHeaders headers;
    public PostGetAssociatedIpv6PoolCidrsRequest withHeaders(PostGetAssociatedIpv6PoolCidrsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetAssociatedIpv6PoolCidrsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}