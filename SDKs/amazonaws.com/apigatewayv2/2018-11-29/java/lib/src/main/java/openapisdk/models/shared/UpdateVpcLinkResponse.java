package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVpcLinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public UpdateVpcLinkResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public UpdateVpcLinkResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public java.util.Map<String, Object> securityGroupIds;
    public UpdateVpcLinkResponse withSecurityGroupIds(java.util.Map<String, Object> securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public java.util.Map<String, Object> subnetIds;
    public UpdateVpcLinkResponse withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public UpdateVpcLinkResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkId")
    public java.util.Map<String, Object> vpcLinkId;
    public UpdateVpcLinkResponse withVpcLinkId(java.util.Map<String, Object> vpcLinkId) {
        this.vpcLinkId = vpcLinkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkStatus")
    public java.util.Map<String, Object> vpcLinkStatus;
    public UpdateVpcLinkResponse withVpcLinkStatus(java.util.Map<String, Object> vpcLinkStatus) {
        this.vpcLinkStatus = vpcLinkStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkStatusMessage")
    public java.util.Map<String, Object> vpcLinkStatusMessage;
    public UpdateVpcLinkResponse withVpcLinkStatusMessage(java.util.Map<String, Object> vpcLinkStatusMessage) {
        this.vpcLinkStatusMessage = vpcLinkStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkVersion")
    public java.util.Map<String, Object> vpcLinkVersion;
    public UpdateVpcLinkResponse withVpcLinkVersion(java.util.Map<String, Object> vpcLinkVersion) {
        this.vpcLinkVersion = vpcLinkVersion;
        return this;
    }
}