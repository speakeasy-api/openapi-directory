package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetVpcLinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public GetVpcLinkResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public GetVpcLinkResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public java.util.Map<String, Object> securityGroupIds;
    public GetVpcLinkResponse withSecurityGroupIds(java.util.Map<String, Object> securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public java.util.Map<String, Object> subnetIds;
    public GetVpcLinkResponse withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public GetVpcLinkResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkId")
    public java.util.Map<String, Object> vpcLinkId;
    public GetVpcLinkResponse withVpcLinkId(java.util.Map<String, Object> vpcLinkId) {
        this.vpcLinkId = vpcLinkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkStatus")
    public java.util.Map<String, Object> vpcLinkStatus;
    public GetVpcLinkResponse withVpcLinkStatus(java.util.Map<String, Object> vpcLinkStatus) {
        this.vpcLinkStatus = vpcLinkStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkStatusMessage")
    public java.util.Map<String, Object> vpcLinkStatusMessage;
    public GetVpcLinkResponse withVpcLinkStatusMessage(java.util.Map<String, Object> vpcLinkStatusMessage) {
        this.vpcLinkStatusMessage = vpcLinkStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcLinkVersion")
    public java.util.Map<String, Object> vpcLinkVersion;
    public GetVpcLinkResponse withVpcLinkVersion(java.util.Map<String, Object> vpcLinkVersion) {
        this.vpcLinkVersion = vpcLinkVersion;
        return this;
    }
}