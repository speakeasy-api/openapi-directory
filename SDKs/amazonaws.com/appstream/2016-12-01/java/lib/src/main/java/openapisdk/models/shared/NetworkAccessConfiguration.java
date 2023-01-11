package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkAccessConfiguration
 * Describes the network details of the fleet or image builder instance.
**/
public class NetworkAccessConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EniId")
    public String eniId;
    public NetworkAccessConfiguration withEniId(String eniId) {
        this.eniId = eniId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EniPrivateIpAddress")
    public String eniPrivateIpAddress;
    public NetworkAccessConfiguration withEniPrivateIpAddress(String eniPrivateIpAddress) {
        this.eniPrivateIpAddress = eniPrivateIpAddress;
        return this;
    }
}