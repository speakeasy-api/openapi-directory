package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicationSubnetGroup
 * Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
**/
public class ReplicationSubnetGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroupDescription")
    public String replicationSubnetGroupDescription;
    public ReplicationSubnetGroup withReplicationSubnetGroupDescription(String replicationSubnetGroupDescription) {
        this.replicationSubnetGroupDescription = replicationSubnetGroupDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroupIdentifier")
    public String replicationSubnetGroupIdentifier;
    public ReplicationSubnetGroup withReplicationSubnetGroupIdentifier(String replicationSubnetGroupIdentifier) {
        this.replicationSubnetGroupIdentifier = replicationSubnetGroupIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetGroupStatus")
    public String subnetGroupStatus;
    public ReplicationSubnetGroup withSubnetGroupStatus(String subnetGroupStatus) {
        this.subnetGroupStatus = subnetGroupStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subnets")
    public Subnet[] subnets;
    public ReplicationSubnetGroup withSubnets(Subnet[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public ReplicationSubnetGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}