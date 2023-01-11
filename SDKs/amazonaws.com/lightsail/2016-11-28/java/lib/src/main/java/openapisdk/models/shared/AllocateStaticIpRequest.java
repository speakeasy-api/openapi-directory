package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AllocateStaticIpRequest {
    @JsonProperty("staticIpName")
    public String staticIpName;
    public AllocateStaticIpRequest withStaticIpName(String staticIpName) {
        this.staticIpName = staticIpName;
        return this;
    }
}