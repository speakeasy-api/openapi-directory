package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateSecurityGroupRuleDescriptionsIngressActionEnum action;
    public PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams withAction(PostUpdateSecurityGroupRuleDescriptionsIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnum version;
    public PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams withVersion(PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}