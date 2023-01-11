package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteClusterSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteClusterSecurityGroupActionEnum action;
    public GetDeleteClusterSecurityGroupQueryParams withAction(GetDeleteClusterSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterSecurityGroupName")
    public String clusterSecurityGroupName;
    public GetDeleteClusterSecurityGroupQueryParams withClusterSecurityGroupName(String clusterSecurityGroupName) {
        this.clusterSecurityGroupName = clusterSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteClusterSecurityGroupVersionEnum version;
    public GetDeleteClusterSecurityGroupQueryParams withVersion(GetDeleteClusterSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}