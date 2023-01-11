package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReleaseStaticIpRequest {
    @JsonProperty("staticIpName")
    public String staticIpName;
    public ReleaseStaticIpRequest withStaticIpName(String staticIpName) {
        this.staticIpName = staticIpName;
        return this;
    }
}