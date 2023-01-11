package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSecurityGroupRuleDescriptionsEgressRequest {
    public PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams queryParams;
    public PostUpdateSecurityGroupRuleDescriptionsEgressRequest withQueryParams(PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateSecurityGroupRuleDescriptionsEgressHeaders headers;
    public PostUpdateSecurityGroupRuleDescriptionsEgressRequest withHeaders(PostUpdateSecurityGroupRuleDescriptionsEgressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateSecurityGroupRuleDescriptionsEgressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}