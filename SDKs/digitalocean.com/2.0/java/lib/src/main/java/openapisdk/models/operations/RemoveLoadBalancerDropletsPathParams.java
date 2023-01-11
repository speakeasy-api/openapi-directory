package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLoadBalancerDropletsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lb_id")
    public String lbId;
    public RemoveLoadBalancerDropletsPathParams withLbId(String lbId) {
        this.lbId = lbId;
        return this;
    }
}