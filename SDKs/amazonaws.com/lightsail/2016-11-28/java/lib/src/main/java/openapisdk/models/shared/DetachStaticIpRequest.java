package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachStaticIpRequest {
    @JsonProperty("staticIpName")
    public String staticIpName;
    public DetachStaticIpRequest withStaticIpName(String staticIpName) {
        this.staticIpName = staticIpName;
        return this;
    }
}