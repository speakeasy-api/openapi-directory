package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizeCacheSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAuthorizeCacheSecurityGroupIngressActionEnum action;
    public GetAuthorizeCacheSecurityGroupIngressQueryParams withAction(GetAuthorizeCacheSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheSecurityGroupName")
    public String cacheSecurityGroupName;
    public GetAuthorizeCacheSecurityGroupIngressQueryParams withCacheSecurityGroupName(String cacheSecurityGroupName) {
        this.cacheSecurityGroupName = cacheSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupName")
    public String ec2SecurityGroupName;
    public GetAuthorizeCacheSecurityGroupIngressQueryParams withEc2SecurityGroupName(String ec2SecurityGroupName) {
        this.ec2SecurityGroupName = ec2SecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupOwnerId")
    public String ec2SecurityGroupOwnerId;
    public GetAuthorizeCacheSecurityGroupIngressQueryParams withEc2SecurityGroupOwnerId(String ec2SecurityGroupOwnerId) {
        this.ec2SecurityGroupOwnerId = ec2SecurityGroupOwnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAuthorizeCacheSecurityGroupIngressVersionEnum version;
    public GetAuthorizeCacheSecurityGroupIngressQueryParams withVersion(GetAuthorizeCacheSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}