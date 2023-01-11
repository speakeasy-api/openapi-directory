package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeHsmResponse
 * Contains the output of the <a>DescribeHsm</a> operation.
**/
public class DescribeHsmResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public DescribeHsmResponse withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EniId")
    public String eniId;
    public DescribeHsmResponse withEniId(String eniId) {
        this.eniId = eniId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EniIp")
    public String eniIp;
    public DescribeHsmResponse withEniIp(String eniIp) {
        this.eniIp = eniIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmArn")
    public String hsmArn;
    public DescribeHsmResponse withHsmArn(String hsmArn) {
        this.hsmArn = hsmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HsmType")
    public String hsmType;
    public DescribeHsmResponse withHsmType(String hsmType) {
        this.hsmType = hsmType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public DescribeHsmResponse withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Partitions")
    public String[] partitions;
    public DescribeHsmResponse withPartitions(String[] partitions) {
        this.partitions = partitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SerialNumber")
    public String serialNumber;
    public DescribeHsmResponse withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerCertLastUpdated")
    public String serverCertLastUpdated;
    public DescribeHsmResponse withServerCertLastUpdated(String serverCertLastUpdated) {
        this.serverCertLastUpdated = serverCertLastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerCertUri")
    public String serverCertUri;
    public DescribeHsmResponse withServerCertUri(String serverCertUri) {
        this.serverCertUri = serverCertUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SoftwareVersion")
    public String softwareVersion;
    public DescribeHsmResponse withSoftwareVersion(String softwareVersion) {
        this.softwareVersion = softwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshKeyLastUpdated")
    public String sshKeyLastUpdated;
    public DescribeHsmResponse withSshKeyLastUpdated(String sshKeyLastUpdated) {
        this.sshKeyLastUpdated = sshKeyLastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SshPublicKey")
    public String sshPublicKey;
    public DescribeHsmResponse withSshPublicKey(String sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public HsmStatusEnum status;
    public DescribeHsmResponse withStatus(HsmStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusDetails")
    public String statusDetails;
    public DescribeHsmResponse withStatusDetails(String statusDetails) {
        this.statusDetails = statusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public DescribeHsmResponse withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionEndDate")
    public String subscriptionEndDate;
    public DescribeHsmResponse withSubscriptionEndDate(String subscriptionEndDate) {
        this.subscriptionEndDate = subscriptionEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionStartDate")
    public String subscriptionStartDate;
    public DescribeHsmResponse withSubscriptionStartDate(String subscriptionStartDate) {
        this.subscriptionStartDate = subscriptionStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionType")
    public SubscriptionTypeEnum subscriptionType;
    public DescribeHsmResponse withSubscriptionType(SubscriptionTypeEnum subscriptionType) {
        this.subscriptionType = subscriptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VendorName")
    public String vendorName;
    public DescribeHsmResponse withVendorName(String vendorName) {
        this.vendorName = vendorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public DescribeHsmResponse withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}