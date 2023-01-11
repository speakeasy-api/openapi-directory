package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySecurityGroupRulesRequest {
    public PostModifySecurityGroupRulesQueryParams queryParams;
    public PostModifySecurityGroupRulesRequest withQueryParams(PostModifySecurityGroupRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifySecurityGroupRulesHeaders headers;
    public PostModifySecurityGroupRulesRequest withHeaders(PostModifySecurityGroupRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifySecurityGroupRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}