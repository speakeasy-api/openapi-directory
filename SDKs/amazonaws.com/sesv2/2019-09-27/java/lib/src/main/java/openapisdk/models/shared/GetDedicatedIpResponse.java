package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDedicatedIpResponse
 * Information about a dedicated IP address.
**/
public class GetDedicatedIpResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedIp")
    public DedicatedIp dedicatedIp;
    public GetDedicatedIpResponse withDedicatedIp(DedicatedIp dedicatedIp) {
        this.dedicatedIp = dedicatedIp;
        return this;
    }
}