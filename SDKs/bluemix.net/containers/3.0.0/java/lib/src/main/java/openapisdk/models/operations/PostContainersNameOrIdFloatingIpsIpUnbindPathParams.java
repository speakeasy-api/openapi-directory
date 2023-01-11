package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdFloatingIpsIpUnbindPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ip")
    public String ip;
    public PostContainersNameOrIdFloatingIpsIpUnbindPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name_or_id")
    public String nameOrId;
    public PostContainersNameOrIdFloatingIpsIpUnbindPathParams withNameOrId(String nameOrId) {
        this.nameOrId = nameOrId;
        return this;
    }
}