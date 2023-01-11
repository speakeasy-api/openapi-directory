package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHsmRequest {
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public CreateHsmRequest withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonProperty("ClusterId")
    public String clusterId;
    public CreateHsmRequest withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public CreateHsmRequest withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
}