package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbSubnetGroup
 * Information about the subnet group for the database instance.
**/
public class AwsRdsDbSubnetGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbSubnetGroupArn")
    public String dbSubnetGroupArn;
    public AwsRdsDbSubnetGroup withDbSubnetGroupArn(String dbSubnetGroupArn) {
        this.dbSubnetGroupArn = dbSubnetGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbSubnetGroupDescription")
    public String dbSubnetGroupDescription;
    public AwsRdsDbSubnetGroup withDbSubnetGroupDescription(String dbSubnetGroupDescription) {
        this.dbSubnetGroupDescription = dbSubnetGroupDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbSubnetGroupName")
    public String dbSubnetGroupName;
    public AwsRdsDbSubnetGroup withDbSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetGroupStatus")
    public String subnetGroupStatus;
    public AwsRdsDbSubnetGroup withSubnetGroupStatus(String subnetGroupStatus) {
        this.subnetGroupStatus = subnetGroupStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subnets")
    public AwsRdsDbSubnetGroupSubnet[] subnets;
    public AwsRdsDbSubnetGroup withSubnets(AwsRdsDbSubnetGroupSubnet[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public AwsRdsDbSubnetGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}