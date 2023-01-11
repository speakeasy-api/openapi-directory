package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachStaticIpRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public AttachStaticIpRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonProperty("staticIpName")
    public String staticIpName;
    public AttachStaticIpRequest withStaticIpName(String staticIpName) {
        this.staticIpName = staticIpName;
        return this;
    }
}