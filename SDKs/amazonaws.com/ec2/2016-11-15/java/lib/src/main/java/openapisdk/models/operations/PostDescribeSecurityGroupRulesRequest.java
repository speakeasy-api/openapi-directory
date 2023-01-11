package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSecurityGroupRulesRequest {
    public PostDescribeSecurityGroupRulesQueryParams queryParams;
    public PostDescribeSecurityGroupRulesRequest withQueryParams(PostDescribeSecurityGroupRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSecurityGroupRulesHeaders headers;
    public PostDescribeSecurityGroupRulesRequest withHeaders(PostDescribeSecurityGroupRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSecurityGroupRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}