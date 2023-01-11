package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDedicatedIpWarmupAttributesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public PutDedicatedIpWarmupAttributesPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
}