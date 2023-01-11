package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLoadBalancerDropletsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lb_id")
    public String lbId;
    public AddLoadBalancerDropletsPathParams withLbId(String lbId) {
        this.lbId = lbId;
        return this;
    }
}