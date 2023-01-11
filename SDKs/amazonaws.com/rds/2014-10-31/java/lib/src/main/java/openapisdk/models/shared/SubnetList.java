package openapisdk.models.shared;



/**
 * SubnetList
 *  This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation. 
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
    public Outpost subnetOutpost;
    public SubnetList withSubnetOutpost(Outpost subnetOutpost) {
        this.subnetOutpost = subnetOutpost;
        return this;
    }
    public String subnetStatus;
    public SubnetList withSubnetStatus(String subnetStatus) {
        this.subnetStatus = subnetStatus;
        return this;
    }
}