package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum action;
    public PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams withAction(PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum version;
    public PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams withVersion(PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum version) {
        this.version = version;
        return this;
    }
}