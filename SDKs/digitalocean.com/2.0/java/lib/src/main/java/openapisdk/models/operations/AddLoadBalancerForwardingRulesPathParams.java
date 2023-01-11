package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLoadBalancerForwardingRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lb_id")
    public String lbId;
    public AddLoadBalancerForwardingRulesPathParams withLbId(String lbId) {
        this.lbId = lbId;
        return this;
    }
}