package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeSecurityGroupEgressRequest {
    public PostRevokeSecurityGroupEgressQueryParams queryParams;
    public PostRevokeSecurityGroupEgressRequest withQueryParams(PostRevokeSecurityGroupEgressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeSecurityGroupEgressHeaders headers;
    public PostRevokeSecurityGroupEgressRequest withHeaders(PostRevokeSecurityGroupEgressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeSecurityGroupEgressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}