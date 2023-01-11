package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lb_id")
    public String lbId;
    public GetLoadBalancerPathParams withLbId(String lbId) {
        this.lbId = lbId;
        return this;
    }
}