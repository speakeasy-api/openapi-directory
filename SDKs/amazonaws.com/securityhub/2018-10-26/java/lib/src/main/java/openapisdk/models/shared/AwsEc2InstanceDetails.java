package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2InstanceDetails
 * The details of an EC2 instance.
**/
public class AwsEc2InstanceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamInstanceProfileArn")
    public String iamInstanceProfileArn;
    public AwsEc2InstanceDetails withIamInstanceProfileArn(String iamInstanceProfileArn) {
        this.iamInstanceProfileArn = iamInstanceProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public AwsEc2InstanceDetails withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpV4Addresses")
    public String[] ipV4Addresses;
    public AwsEc2InstanceDetails withIpV4Addresses(String[] ipV4Addresses) {
        this.ipV4Addresses = ipV4Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpV6Addresses")
    public String[] ipV6Addresses;
    public AwsEc2InstanceDetails withIpV6Addresses(String[] ipV6Addresses) {
        this.ipV6Addresses = ipV6Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyName")
    public String keyName;
    public AwsEc2InstanceDetails withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchedAt")
    public String launchedAt;
    public AwsEc2InstanceDetails withLaunchedAt(String launchedAt) {
        this.launchedAt = launchedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkInterfaces")
    public AwsEc2InstanceNetworkInterfacesDetails[] networkInterfaces;
    public AwsEc2InstanceDetails withNetworkInterfaces(AwsEc2InstanceNetworkInterfacesDetails[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public AwsEc2InstanceDetails withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEc2InstanceDetails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public AwsEc2InstanceDetails withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}