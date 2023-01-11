package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floating_ip")
    public String floatingIp;
    public PostFloatingIpActionPathParams withFloatingIp(String floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}