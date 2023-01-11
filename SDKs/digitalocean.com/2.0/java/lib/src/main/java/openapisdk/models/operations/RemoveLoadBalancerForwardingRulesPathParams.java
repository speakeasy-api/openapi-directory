package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLoadBalancerForwardingRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lb_id")
    public String lbId;
    public RemoveLoadBalancerForwardingRulesPathParams withLbId(String lbId) {
        this.lbId = lbId;
        return this;
    }
}