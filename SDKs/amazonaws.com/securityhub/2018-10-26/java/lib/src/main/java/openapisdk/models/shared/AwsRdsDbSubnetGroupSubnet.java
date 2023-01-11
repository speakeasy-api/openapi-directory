package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbSubnetGroupSubnet
 * Information about a subnet in a subnet group.
**/
public class AwsRdsDbSubnetGroupSubnet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetAvailabilityZone")
    public AwsRdsDbSubnetGroupSubnetAvailabilityZone subnetAvailabilityZone;
    public AwsRdsDbSubnetGroupSubnet withSubnetAvailabilityZone(AwsRdsDbSubnetGroupSubnetAvailabilityZone subnetAvailabilityZone) {
        this.subnetAvailabilityZone = subnetAvailabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIdentifier")
    public String subnetIdentifier;
    public AwsRdsDbSubnetGroupSubnet withSubnetIdentifier(String subnetIdentifier) {
        this.subnetIdentifier = subnetIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetStatus")
    public String subnetStatus;
    public AwsRdsDbSubnetGroupSubnet withSubnetStatus(String subnetStatus) {
        this.subnetStatus = subnetStatus;
        return this;
    }
}