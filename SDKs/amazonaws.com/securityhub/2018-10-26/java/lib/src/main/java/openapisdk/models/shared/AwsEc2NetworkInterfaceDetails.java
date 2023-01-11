package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2NetworkInterfaceDetails
 * Details about the network interface
**/
public class AwsEc2NetworkInterfaceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attachment")
    public AwsEc2NetworkInterfaceAttachment attachment;
    public AwsEc2NetworkInterfaceDetails withAttachment(AwsEc2NetworkInterfaceAttachment attachment) {
        this.attachment = attachment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpV6Addresses")
    public AwsEc2NetworkInterfaceIpV6AddressDetail[] ipV6Addresses;
    public AwsEc2NetworkInterfaceDetails withIpV6Addresses(AwsEc2NetworkInterfaceIpV6AddressDetail[] ipV6Addresses) {
        this.ipV6Addresses = ipV6Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkInterfaceId")
    public String networkInterfaceId;
    public AwsEc2NetworkInterfaceDetails withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateIpAddresses")
    public AwsEc2NetworkInterfacePrivateIpAddressDetail[] privateIpAddresses;
    public AwsEc2NetworkInterfaceDetails withPrivateIpAddresses(AwsEc2NetworkInterfacePrivateIpAddressDetail[] privateIpAddresses) {
        this.privateIpAddresses = privateIpAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicDnsName")
    public String publicDnsName;
    public AwsEc2NetworkInterfaceDetails withPublicDnsName(String publicDnsName) {
        this.publicDnsName = publicDnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicIp")
    public String publicIp;
    public AwsEc2NetworkInterfaceDetails withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public AwsEc2NetworkInterfaceSecurityGroup[] securityGroups;
    public AwsEc2NetworkInterfaceDetails withSecurityGroups(AwsEc2NetworkInterfaceSecurityGroup[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDestCheck")
    public Boolean sourceDestCheck;
    public AwsEc2NetworkInterfaceDetails withSourceDestCheck(Boolean sourceDestCheck) {
        this.sourceDestCheck = sourceDestCheck;
        return this;
    }
}