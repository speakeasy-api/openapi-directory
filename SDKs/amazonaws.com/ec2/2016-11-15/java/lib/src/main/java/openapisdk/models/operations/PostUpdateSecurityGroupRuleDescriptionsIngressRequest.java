package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSecurityGroupRuleDescriptionsIngressRequest {
    public PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams queryParams;
    public PostUpdateSecurityGroupRuleDescriptionsIngressRequest withQueryParams(PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateSecurityGroupRuleDescriptionsIngressHeaders headers;
    public PostUpdateSecurityGroupRuleDescriptionsIngressRequest withHeaders(PostUpdateSecurityGroupRuleDescriptionsIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateSecurityGroupRuleDescriptionsIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}