package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFloatingIpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floating_ip")
    public String floatingIp;
    public DeleteFloatingIpPathParams withFloatingIp(String floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}