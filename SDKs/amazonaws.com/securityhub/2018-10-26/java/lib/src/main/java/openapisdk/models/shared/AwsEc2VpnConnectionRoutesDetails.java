package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2VpnConnectionRoutesDetails
 * A static routes associated with the VPN connection.
**/
public class AwsEc2VpnConnectionRoutesDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCidrBlock")
    public String destinationCidrBlock;
    public AwsEc2VpnConnectionRoutesDetails withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public AwsEc2VpnConnectionRoutesDetails withState(String state) {
        this.state = state;
        return this;
    }
}