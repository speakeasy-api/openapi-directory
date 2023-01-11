package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLoadBalancerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lb_id")
    public String lbId;
    public DeleteLoadBalancerPathParams withLbId(String lbId) {
        this.lbId = lbId;
        return this;
    }
}