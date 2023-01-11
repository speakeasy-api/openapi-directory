package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subnet
 * In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
**/
public class Subnet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetAvailabilityZone")
    public AvailabilityZone subnetAvailabilityZone;
    public Subnet withSubnetAvailabilityZone(AvailabilityZone subnetAvailabilityZone) {
        this.subnetAvailabilityZone = subnetAvailabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIdentifier")
    public String subnetIdentifier;
    public Subnet withSubnetIdentifier(String subnetIdentifier) {
        this.subnetIdentifier = subnetIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetStatus")
    public String subnetStatus;
    public Subnet withSubnetStatus(String subnetStatus) {
        this.subnetStatus = subnetStatus;
        return this;
    }
}