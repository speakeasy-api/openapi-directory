package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevokeDbSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRevokeDbSecurityGroupIngressActionEnum action;
    public GetRevokeDbSecurityGroupIngressQueryParams withAction(GetRevokeDbSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CIDRIP")
    public String cidrip;
    public GetRevokeDbSecurityGroupIngressQueryParams withCidrip(String cidrip) {
        this.cidrip = cidrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSecurityGroupName")
    public String dbSecurityGroupName;
    public GetRevokeDbSecurityGroupIngressQueryParams withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupId")
    public String ec2SecurityGroupId;
    public GetRevokeDbSecurityGroupIngressQueryParams withEc2SecurityGroupId(String ec2SecurityGroupId) {
        this.ec2SecurityGroupId = ec2SecurityGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupName")
    public String ec2SecurityGroupName;
    public GetRevokeDbSecurityGroupIngressQueryParams withEc2SecurityGroupName(String ec2SecurityGroupName) {
        this.ec2SecurityGroupName = ec2SecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupOwnerId")
    public String ec2SecurityGroupOwnerId;
    public GetRevokeDbSecurityGroupIngressQueryParams withEc2SecurityGroupOwnerId(String ec2SecurityGroupOwnerId) {
        this.ec2SecurityGroupOwnerId = ec2SecurityGroupOwnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRevokeDbSecurityGroupIngressVersionEnum version;
    public GetRevokeDbSecurityGroupIngressQueryParams withVersion(GetRevokeDbSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}