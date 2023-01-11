package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVpcLinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public CreateVpcLinkResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public CreateVpcLinkResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public java.util.Map<String, Object> securityGroupIds;
    public CreateVpcLinkResponse withSecurityGroupIds(java.util.Map<String, Object> securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public java.util.Map<String, Object> subnetIds;
    public CreateVpcLinkResponse withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateVpcLinkResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkId")
    public java.util.Map<String, Object> vpcLinkId;
    public CreateVpcLinkResponse withVpcLinkId(java.util.Map<String, Object> vpcLinkId) {
        this.vpcLinkId = vpcLinkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkStatus")
    public java.util.Map<String, Object> vpcLinkStatus;
    public CreateVpcLinkResponse withVpcLinkStatus(java.util.Map<String, Object> vpcLinkStatus) {
        this.vpcLinkStatus = vpcLinkStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkStatusMessage")
    public java.util.Map<String, Object> vpcLinkStatusMessage;
    public CreateVpcLinkResponse withVpcLinkStatusMessage(java.util.Map<String, Object> vpcLinkStatusMessage) {
        this.vpcLinkStatusMessage = vpcLinkStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkVersion")
    public java.util.Map<String, Object> vpcLinkVersion;
    public CreateVpcLinkResponse withVpcLinkVersion(java.util.Map<String, Object> vpcLinkVersion) {
        this.vpcLinkVersion = vpcLinkVersion;
        return this;
    }
}