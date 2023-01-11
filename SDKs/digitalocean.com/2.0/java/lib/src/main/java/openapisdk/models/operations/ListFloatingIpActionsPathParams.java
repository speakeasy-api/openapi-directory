package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFloatingIpActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floating_ip")
    public String floatingIp;
    public ListFloatingIpActionsPathParams withFloatingIp(String floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}