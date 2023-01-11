package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Ec2Config
 * The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. 
**/
public class Ec2Config {
    @JsonProperty("SecurityGroupArns")
    public String[] securityGroupArns;
    public Ec2Config withSecurityGroupArns(String[] securityGroupArns) {
        this.securityGroupArns = securityGroupArns;
        return this;
    }
    @JsonProperty("SubnetArn")
    public String subnetArn;
    public Ec2Config withSubnetArn(String subnetArn) {
        this.subnetArn = subnetArn;
        return this;
    }
}