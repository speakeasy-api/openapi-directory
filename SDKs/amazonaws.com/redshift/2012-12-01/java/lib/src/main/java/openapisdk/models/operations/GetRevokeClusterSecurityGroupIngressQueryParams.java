package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevokeClusterSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRevokeClusterSecurityGroupIngressActionEnum action;
    public GetRevokeClusterSecurityGroupIngressQueryParams withAction(GetRevokeClusterSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CIDRIP")
    public String cidrip;
    public GetRevokeClusterSecurityGroupIngressQueryParams withCidrip(String cidrip) {
        this.cidrip = cidrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterSecurityGroupName")
    public String clusterSecurityGroupName;
    public GetRevokeClusterSecurityGroupIngressQueryParams withClusterSecurityGroupName(String clusterSecurityGroupName) {
        this.clusterSecurityGroupName = clusterSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupName")
    public String ec2SecurityGroupName;
    public GetRevokeClusterSecurityGroupIngressQueryParams withEc2SecurityGroupName(String ec2SecurityGroupName) {
        this.ec2SecurityGroupName = ec2SecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupOwnerId")
    public String ec2SecurityGroupOwnerId;
    public GetRevokeClusterSecurityGroupIngressQueryParams withEc2SecurityGroupOwnerId(String ec2SecurityGroupOwnerId) {
        this.ec2SecurityGroupOwnerId = ec2SecurityGroupOwnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRevokeClusterSecurityGroupIngressVersionEnum version;
    public GetRevokeClusterSecurityGroupIngressQueryParams withVersion(GetRevokeClusterSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}