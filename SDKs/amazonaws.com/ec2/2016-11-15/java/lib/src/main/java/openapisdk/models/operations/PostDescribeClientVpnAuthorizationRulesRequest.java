package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnAuthorizationRulesRequest {
    public PostDescribeClientVpnAuthorizationRulesQueryParams queryParams;
    public PostDescribeClientVpnAuthorizationRulesRequest withQueryParams(PostDescribeClientVpnAuthorizationRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClientVpnAuthorizationRulesHeaders headers;
    public PostDescribeClientVpnAuthorizationRulesRequest withHeaders(PostDescribeClientVpnAuthorizationRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClientVpnAuthorizationRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}