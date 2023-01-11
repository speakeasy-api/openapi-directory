package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersFloatingIpsIpReleasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ip")
    public String ip;
    public PostContainersFloatingIpsIpReleasePathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
}