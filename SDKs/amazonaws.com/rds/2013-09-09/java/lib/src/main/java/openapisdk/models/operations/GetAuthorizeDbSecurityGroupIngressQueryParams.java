package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizeDbSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAuthorizeDbSecurityGroupIngressActionEnum action;
    public GetAuthorizeDbSecurityGroupIngressQueryParams withAction(GetAuthorizeDbSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CIDRIP")
    public String cidrip;
    public GetAuthorizeDbSecurityGroupIngressQueryParams withCidrip(String cidrip) {
        this.cidrip = cidrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSecurityGroupName")
    public String dbSecurityGroupName;
    public GetAuthorizeDbSecurityGroupIngressQueryParams withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupId")
    public String ec2SecurityGroupId;
    public GetAuthorizeDbSecurityGroupIngressQueryParams withEc2SecurityGroupId(String ec2SecurityGroupId) {
        this.ec2SecurityGroupId = ec2SecurityGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupName")
    public String ec2SecurityGroupName;
    public GetAuthorizeDbSecurityGroupIngressQueryParams withEc2SecurityGroupName(String ec2SecurityGroupName) {
        this.ec2SecurityGroupName = ec2SecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupOwnerId")
    public String ec2SecurityGroupOwnerId;
    public GetAuthorizeDbSecurityGroupIngressQueryParams withEc2SecurityGroupOwnerId(String ec2SecurityGroupOwnerId) {
        this.ec2SecurityGroupOwnerId = ec2SecurityGroupOwnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAuthorizeDbSecurityGroupIngressVersionEnum version;
    public GetAuthorizeDbSecurityGroupIngressQueryParams withVersion(GetAuthorizeDbSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}