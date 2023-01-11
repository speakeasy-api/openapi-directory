package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFloatingIpActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action_id")
    public Long actionId;
    public GetFloatingIpActionPathParams withActionId(Long actionId) {
        this.actionId = actionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floating_ip")
    public String floatingIp;
    public GetFloatingIpActionPathParams withFloatingIp(String floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}