package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStaticIpRequest {
    @JsonProperty("staticIpName")
    public String staticIpName;
    public GetStaticIpRequest withStaticIpName(String staticIpName) {
        this.staticIpName = staticIpName;
        return this;
    }
}