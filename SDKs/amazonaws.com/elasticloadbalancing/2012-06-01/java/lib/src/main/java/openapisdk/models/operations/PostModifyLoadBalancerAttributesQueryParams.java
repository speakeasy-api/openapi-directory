package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyLoadBalancerAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyLoadBalancerAttributesActionEnum action;
    public PostModifyLoadBalancerAttributesQueryParams withAction(PostModifyLoadBalancerAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyLoadBalancerAttributesVersionEnum version;
    public PostModifyLoadBalancerAttributesQueryParams withVersion(PostModifyLoadBalancerAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}