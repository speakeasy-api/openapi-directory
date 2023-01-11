package openapisdk.models.shared;



/**
 * SubnetList
 * Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
**/
public class SubnetList {
    public AvailabilityZone subnetAvailabilityZone;
    public SubnetList withSubnetAvailabilityZone(AvailabilityZone subnetAvailabilityZone) {
        this.subnetAvailabilityZone = subnetAvailabilityZone;
        return this;
    }
    public String subnetIdentifier;
    public SubnetList withSubnetIdentifier(String subnetIdentifier) {
        this.subnetIdentifier = subnetIdentifier;
        return this;
    }
    public SubnetOutpost subnetOutpost;
    public SubnetList withSubnetOutpost(SubnetOutpost subnetOutpost) {
        this.subnetOutpost = subnetOutpost;
        return this;
    }
}