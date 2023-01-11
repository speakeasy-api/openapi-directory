package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2InstanceNetworkInterfacesDetails
 * Identifies a network interface for the EC2 instance.
**/
public class AwsEc2InstanceNetworkInterfacesDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkInterfaceId")
    public String networkInterfaceId;
    public AwsEc2InstanceNetworkInterfacesDetails withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
}