package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetIpSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IPSet")
    public IpSet ipSet;
    public GetIpSetResponse withIpSet(IpSet ipSet) {
        this.ipSet = ipSet;
        return this;
    }
}