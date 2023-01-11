package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFloatingIpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floating_ip")
    public String floatingIp;
    public GetFloatingIpPathParams withFloatingIp(String floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}