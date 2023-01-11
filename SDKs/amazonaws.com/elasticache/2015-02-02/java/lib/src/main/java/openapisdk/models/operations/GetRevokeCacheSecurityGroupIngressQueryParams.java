package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevokeCacheSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRevokeCacheSecurityGroupIngressActionEnum action;
    public GetRevokeCacheSecurityGroupIngressQueryParams withAction(GetRevokeCacheSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheSecurityGroupName")
    public String cacheSecurityGroupName;
    public GetRevokeCacheSecurityGroupIngressQueryParams withCacheSecurityGroupName(String cacheSecurityGroupName) {
        this.cacheSecurityGroupName = cacheSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupName")
    public String ec2SecurityGroupName;
    public GetRevokeCacheSecurityGroupIngressQueryParams withEc2SecurityGroupName(String ec2SecurityGroupName) {
        this.ec2SecurityGroupName = ec2SecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EC2SecurityGroupOwnerId")
    public String ec2SecurityGroupOwnerId;
    public GetRevokeCacheSecurityGroupIngressQueryParams withEc2SecurityGroupOwnerId(String ec2SecurityGroupOwnerId) {
        this.ec2SecurityGroupOwnerId = ec2SecurityGroupOwnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRevokeCacheSecurityGroupIngressVersionEnum version;
    public GetRevokeCacheSecurityGroupIngressQueryParams withVersion(GetRevokeCacheSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}