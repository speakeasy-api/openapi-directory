package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointDetails
 * <p>The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP address to your server's endpoint.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note>
**/
public class EndpointDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressAllocationIds")
    public String[] addressAllocationIds;
    public EndpointDetails withAddressAllocationIds(String[] addressAllocationIds) {
        this.addressAllocationIds = addressAllocationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public EndpointDetails withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public EndpointDetails withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcEndpointId")
    public String vpcEndpointId;
    public EndpointDetails withVpcEndpointId(String vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public EndpointDetails withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}