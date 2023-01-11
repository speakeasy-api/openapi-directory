package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizeClusterSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAuthorizeClusterSecurityGroupIngressActionEnum action;
    public GetAuthorizeClusterSecurityGroupIngressQueryParams withAction(GetAuthorizeClusterSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CIDRIP")
    public String cidrip;
    public GetAuthorizeClusterSecurityGroupIngressQueryParams withCidrip(String cidrip) {
        this.cidrip = cidrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterSecurityGroupName")
    public String clusterSecurityGroupName;
    public GetAuthorizeClusterSecurityGroupIngressQueryParams withClusterSecurityGroupName(String clusterSecurityGroupName) {
        this.clusterSecurityGroupName = clusterSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupName")
    public String ec2SecurityGroupName;
    public GetAuthorizeClusterSecurityGroupIngressQueryParams withEc2SecurityGroupName(String ec2SecurityGroupName) {
        this.ec2SecurityGroupName = ec2SecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupOwnerId")
    public String ec2SecurityGroupOwnerId;
    public GetAuthorizeClusterSecurityGroupIngressQueryParams withEc2SecurityGroupOwnerId(String ec2SecurityGroupOwnerId) {
        this.ec2SecurityGroupOwnerId = ec2SecurityGroupOwnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAuthorizeClusterSecurityGroupIngressVersionEnum version;
    public GetAuthorizeClusterSecurityGroupIngressQueryParams withVersion(GetAuthorizeClusterSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}