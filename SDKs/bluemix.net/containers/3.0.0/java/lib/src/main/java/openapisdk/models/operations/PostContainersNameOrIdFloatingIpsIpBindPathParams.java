package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdFloatingIpsIpBindPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ip")
    public String ip;
    public PostContainersNameOrIdFloatingIpsIpBindPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name_or_id")
    public String nameOrId;
    public PostContainersNameOrIdFloatingIpsIpBindPathParams withNameOrId(String nameOrId) {
        this.nameOrId = nameOrId;
        return this;
    }
}