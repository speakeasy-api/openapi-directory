package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDedicatedIpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public GetDedicatedIpPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
}